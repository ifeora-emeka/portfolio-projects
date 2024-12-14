import {QuizSessionData} from "@/types/question.types";

export const SESSION_DATA: QuizSessionData = {
    quizSession: {
        id: '1',
        description: 'Introduction to Javascript Quiz Session',
        userID: '1',
        settings: {
            quizSessionID: '1',
            timeLimitInMinutes: 60,
            isRandomized: true,
            isTimed: true,
            isPracticeMode: true,
            showAnswerDuringQuiz: false,
        }
    },
    questions: [],
    quizSections: [],
    quizSessionResults: [],
}