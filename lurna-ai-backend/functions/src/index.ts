import { onRequest } from "firebase-functions/v2/https";
import { OpenAI } from "openai";
import dotenv from 'dotenv'

dotenv.config()

import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY
});

const CurriculumSchema = z.object({
    curriculum: z.array(
        z.object({
            title: z.string(),
            description: z.string(),
            duration: z.string(),
            topics: z.array(z.string()),
        })
    ),
});

export const generateCurriculum = onRequest(async (request, response) => {
    try {
        const title = request.query.title;
        const completion = await openai.beta.chat.completions.parse({
            model: "gpt-4o-2024-08-06",
            messages: [
                {
                    role: "system",
                    content: `
            You are an educational expert. Generate an array of curriculum objects wrapped in a "curriculum" key. 
            Each object must follow this format:
            {
              "title": "Course Title",
              "description": "Brief description of the course",
              "duration": "Duration in weeks",
              "topics": ["Topic 1", "Topic 2", "Topic 3"]
            }.
            Ensure all values are realistic and the JSON is valid.
          `,
                },
                {
                    role: "user",
                    content: `Generate a curriculum for ${title}`,
                },
            ],
            response_format: zodResponseFormat(CurriculumSchema, "response"),
        });

        const data = completion.choices[0].message.parsed;

        response.json({ success: true, data });
    } catch (error) {
        console.error("Error generating curriculum:", error);
        response.status(500).json({ success: false, error: error });
    }
});