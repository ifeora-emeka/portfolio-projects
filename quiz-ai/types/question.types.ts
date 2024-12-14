

export interface QuizSession {
    id: string;
    description: string;
    userID: string;
    settings: QuizSessionSettings;
    totalQuestions: number;
    totalSections: number;
    totalDuration: number;
    totalAnswered: number;
}

export interface QuizSessionSettings {
    quizSessionID: string;
    timeLimitInMinutes: number;
    isRandomized: boolean;
    isTimed: boolean;
    isPracticeMode: boolean;
    showAnswerDuringQuiz: boolean;
}

export interface QuizSection {
    id: string;
    quizSessionID: string;
    description: string;
    whatWeWillCover: string[];
}

export interface Question {
    id: string;
    quizSectionID: string;
    quizSessionID: string;
    question: string;
    type: QuestionType;
    options: Option[];
    correctAnswers: string[]; // IDs of the correct options
}

export enum QuestionType {
    SINGLE_SELECT = 'single_select',
    MULTI_SELECT = 'multi_select',
    LONG_TEXT = 'long_text',
}

export interface Option {
    id: string;
    questionID: string;
    option: string;
}

export interface QuizSessionResult {
    quizSessionID: string;
    userID: string;
    score: number; // Ex if we have 10 questions and user got 7 correct, score will be 70
    date: Date;
}

export interface QuizSessionData {
    quizSession: QuizSession;
    quizSections: QuizSection[];
    questions: Question[];
    quizSessionResults: QuizSessionResult[];
}
