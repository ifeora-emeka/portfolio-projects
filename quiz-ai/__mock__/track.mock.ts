import { LearningTrack } from "@/types/track.types";

export const mockTrackData: LearningTrack[] = [
    {
      id: "track-001",
      title: "Mastering JavaScript Fundamentals",
      description:
        "This track covers the foundational concepts of JavaScript, including variables, data types, functions, and DOM manipulation. By the end of this track, users will be able to create dynamic and interactive web applications.",
      tags: ["JavaScript", "Programming", "Web Development", "Beginner"],
      isPublic: true,
      isDeleted: false,
      isCompleted: false,
      lastEdited: new Date("2024-12-01"),
      createdAt: new Date("2024-11-28"),
      updatedAt: new Date("2024-12-01"),
      userID: "user-001",
      difficultyLevel: 'intermidiate'
    },
    {
      id: "track-002",
      title: "Creative Writing: Crafting Compelling Stories",
      description:
        "This track focuses on enhancing creative writing skills, exploring techniques for building strong characters, developing plotlines, and creating immersive settings. Users will work on drafting short stories, refining dialogue, and employing effective narrative structures.",
      tags: ["Creative Writing", "Storytelling", "Literature", "Intermediate"],
      isPublic: false,
      isDeleted: false,
      isCompleted: false,
      lastEdited: new Date("2024-12-01"),
      createdAt: new Date("2024-11-29"),
      updatedAt: new Date("2024-12-01"),
      userID: "user-001",
      difficultyLevel: 'beginner'
    },
  ];
  