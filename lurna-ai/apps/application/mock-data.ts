import {QuestionType, QuizSessionData} from "@/types/question.types";

export const SESSION_DATA: QuizSessionData = {
    quizSession: {
        id: "session_001",
        description: "JavaScript Mastery Quiz: Explore JS engines, Promises, and Async/Await.",
        userID: "user_123",
        settings: {
            quizSessionID: "session_001",
            timeLimitInMinutes: 30,
            isRandomized: true,
            isTimed: true,
            isPracticeMode: false,
            showAnswerDuringQuiz: false,
        },

        // AI generated
        areasOfImprovement: ["Async/Await", "Error Handling", "Event Loop"],

        // Results
        totalQuestions: 15,
        totalSections: 3,

        // Settings
        totalDurationInMinutes: 25,
        totalAnsweredCorrectly: 0,
        canViewPreviousQuestions: false,

        // User generated
        userProvidedTopic: "JavaScript Advanced Concepts",
        timeSpentInSeconds: 0,

        currentSectionIndex: 0,
        currentQuestionIndex: 0,
        progressPercentage: 0,
        analytics: {
            weakAreas: [],
            strongAreas: [],
            averageAnswerTime: 0,
        },
        isCompleted: false,
        lastAccessed: new Date(),
    },

    quizSections: [
        {
            id: "section_001",
            quizSessionID: "session_001",
            description: "Understanding the JavaScript Engine",
            whatWeWillCover: [
                "How the JS engine works",
                "Call Stack and Memory Heap",
                "Execution Contexts",
            ],
            explanation:
                "This section tests your understanding of how JavaScript executes code under the hood.",
            hint: "Think about concepts like the Global Execution Context and stack overflow errors.",
            timeLimitInSeconds: 600,
            timeSpentInSeconds: 0,
        },
        {
            id: "section_002",
            quizSessionID: "session_001",
            description: "Mastering Promises",
            whatWeWillCover: [
                "Promise states and lifecycle",
                "Chaining Promises",
                "Error handling with catch",
            ],
            explanation:
                "Focuses on how Promises help manage asynchronous operations effectively.",
            hint: "Remember, promises start in a pending state.",
            timeLimitInSeconds: 900,
            timeSpentInSeconds: 0,
        },
        {
            id: "section_003",
            quizSessionID: "session_001",
            description: "Async/Await in Action",
            whatWeWillCover: [
                "Syntax and purpose of async/await",
                "Handling errors with try-catch",
                "Combining multiple async calls",
            ],
            explanation:
                "Tests your ability to use async/await to handle asynchronous code more readably.",
            hint: "Consider the syntactic sugar of async/await over promises.",
            timeLimitInSeconds: 600,
            timeSpentInSeconds: 0,
        },
    ],
    questions: [
        {
            id: "q_001",
            quizSectionID: "section_001",
            quizSessionID: "session_001",
            question: "What does the JavaScript call stack do?",
            type: QuestionType.SINGLE_SELECT,
            options: [
                { id: "o_001_1", questionID: "q_001", option: "Manages memory allocation" },
                { id: "o_001_2", questionID: "q_001", option: "Tracks function execution order" },
                { id: "o_001_3", questionID: "q_001", option: "Handles asynchronous operations" },
                { id: "o_001_4", questionID: "q_001", option: "Optimizes code execution" },
            ],
            correctAnswers: ["o_001_2"],
            userAnswer: { questionID: "q_001", selectedOptionIDs: [], isCorrect: null, timestamp: new Date() },
            timeLimitInSeconds: 30,
            timeSpentInSeconds: 0,
            difficulty: "easy",
            tags: ["call-stack", "execution"],
        },
        {
            id: "q_002",
            quizSectionID: "section_001",
            quizSessionID: "session_001",
            question: "Which of the following can cause a stack overflow?",
            type: QuestionType.MULTI_SELECT,
            options: [
                { id: "o_002_1", questionID: "q_002", option: "Infinite recursion" },
                { id: "o_002_2", questionID: "q_002", option: "Excessive memory heap usage" },
                { id: "o_002_3", questionID: "q_002", option: "Large number of function calls without returning" },
                { id: "o_002_4", questionID: "q_002", option: "Asynchronous API calls" },
            ],
            correctAnswers: ["o_002_1", "o_002_3"],
            userAnswer: { questionID: "q_002", selectedOptionIDs: [], isCorrect: null, timestamp: new Date() },
            timeLimitInSeconds: 45,
            timeSpentInSeconds: 0,
            difficulty: "medium",
            tags: ["call-stack", "stack-overflow"],
        },
        {
            id: "q_003",
            quizSectionID: "section_002",
            quizSessionID: "session_001",
            question: "What are the possible states of a Promise?",
            type: QuestionType.MULTI_SELECT,
            options: [
                { id: "o_003_1", questionID: "q_003", option: "Pending" },
                { id: "o_003_2", questionID: "q_003", option: "Resolved" },
                { id: "o_003_3", questionID: "q_003", option: "Rejected" },
                { id: "o_003_4", questionID: "q_003", option: "Fulfilled" },
            ],
            correctAnswers: ["o_003_1", "o_003_3", "o_003_4"],
            userAnswer: { questionID: "q_003", selectedOptionIDs: [], isCorrect: null, timestamp: new Date() },
            timeLimitInSeconds: 60,
            timeSpentInSeconds: 0,
            difficulty: "medium",
            tags: ["promises", "async"],
        },
        {
            id: "q_004",
            quizSectionID: "section_002",
            quizSessionID: "session_001",
            question: "What is the purpose of the `.catch()` method in Promises?",
            type: QuestionType.SINGLE_SELECT,
            options: [
                { id: "o_004_1", questionID: "q_004", option: "To handle promise chaining" },
                { id: "o_004_2", questionID: "q_004", option: "To handle errors in promises" },
                { id: "o_004_3", questionID: "q_004", option: "To resolve the promise" },
                { id: "o_004_4", questionID: "q_004", option: "To reject the promise" },
            ],
            correctAnswers: ["o_004_2"],
            userAnswer: { questionID: "q_004", selectedOptionIDs: [], isCorrect: null, timestamp: new Date() },
            timeLimitInSeconds: 30,
            timeSpentInSeconds: 0,
            difficulty: "easy",
            tags: ["promises", "error-handling"],
        },
        {
            id: "q_005",
            quizSectionID: "section_003",
            quizSessionID: "session_001",
            question: "What keyword is required to use `await` in JavaScript?",
            type: QuestionType.SINGLE_SELECT,
            options: [
                { id: "o_005_1", questionID: "q_005", option: "async" },
                { id: "o_005_2", questionID: "q_005", option: "await" },
                { id: "o_005_3", questionID: "q_005", option: "promise" },
                { id: "o_005_4", questionID: "q_005", option: "function" },
            ],
            correctAnswers: ["o_005_1"],
            userAnswer: { questionID: "q_005", selectedOptionIDs: [], isCorrect: null, timestamp: new Date() },
            timeLimitInSeconds: 30,
            timeSpentInSeconds: 0,
            difficulty: "easy",
            tags: ["async-await", "syntax"],
        },
        {
            id: "q_006",
            quizSectionID: "section_003",
            quizSessionID: "session_001",
            question: "How do you handle errors in async/await?",
            type: QuestionType.LONG_TEXT,
            options: [],
            correctAnswers: [],
            userAnswer: { questionID: "q_006", typedAnswer: "", selectedOptionIDs: [], isCorrect: null, timestamp: new Date() },
            timeLimitInSeconds: 120,
            timeSpentInSeconds: 0,
            difficulty: "medium",
            tags: ["async-await", "error-handling"],
        },
    ],
    quizSessionResults: [
        {
            quizSessionID: "session_001",
            userID: "user_123",
            score: 80, // Overall percentage
            date: new Date(),
            detailedScores: [
                {
                    sectionID: "section_001",
                    correctAnswers: 4,
                    totalQuestions: 5,
                    percentage: 80, // (4/5) * 100
                },
                {
                    sectionID: "section_002",
                    correctAnswers: 4,
                    totalQuestions: 5,
                    percentage: 80, // (4/5) * 100
                },
                {
                    sectionID: "section_003",
                    correctAnswers: 4,
                    totalQuestions: 5,
                    percentage: 80, // (4/5) * 100
                },
            ],
            partialCreditEnabled: false,
        }
    ]
};
