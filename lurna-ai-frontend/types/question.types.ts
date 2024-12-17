

export interface QuizSession {
    id: string;
    description: string;
    userID: string;
    settings: QuizSessionSettings;

    // AI gen
    areasOfImprovement: string[];

    // settings
    totalDurationInMinutes: number;
    totalAnsweredCorrectly: number;
    canViewPreviousQuestions: boolean;

    // user gen
    userProvidedTopic: string;
    timeSpentInSeconds: number;

    // progress
    currentSectionIndex: number;
    currentQuestionIndex: number;
    progressPercentage: number;

    // results
    totalQuestions: number;
    totalSections: number;
    analytics: {
        weakAreas: string[];
        strongAreas: string[];
        averageAnswerTime: number;
    };
    isCompleted: boolean;
    lastAccessed: Date;
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
    explanation: string;
    hint: string;
    timeLimitInSeconds?: number;
    timeSpentInSeconds: number;

}

export interface Question {
    id: string;
    quizSectionID: string;
    quizSessionID: string;
    question: string;
    type: QuestionType;
    options: Option[];
    correctAnswers: string[];
    userAnswer: UserAnswer;
    timeLimitInSeconds?: number;
    timeSpentInSeconds: number;
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[];
}

export interface UserAnswer {
    questionID: string;
    selectedOptionIDs: string[];
    typedAnswer?: string;
    isCorrect: boolean | null;
    timestamp: Date;
}

export enum QuestionType {
    SINGLE_SELECT = 'single_select',
    MULTI_SELECT = 'multi_select',
    LONG_TEXT = 'long_text',
}

export interface Option {
    id: string;
    questionID: string;
    content: string;
}

export interface QuizSessionResult {
    quizSessionID: string;
    userID: string;
    score: number;
    date: Date;
    detailedScores: {
        sectionID: string;
        correctAnswers: number;
        totalQuestions: number;
        percentage: number;
    }[];
    partialCreditEnabled: boolean;
}

export interface QuizSessionData {
    quizSession: QuizSession;
    quizSections: QuizSection[];
    questions: Question[];
    quizSessionResults: QuizSessionResult[];
}
