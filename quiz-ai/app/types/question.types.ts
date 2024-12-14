

export interface QuizSession {
    id: string;
    description: string;
    userID: string;
    settings: QuizSessionSettings;
}

export interface QuizSessionSettings {
    quizSessionID: string;
    timeLimit: number;
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

export interface QuizSessionData {
    quizSession: QuizSession;
    quizSections: QuizSection[];
    questions: Question[];
}
