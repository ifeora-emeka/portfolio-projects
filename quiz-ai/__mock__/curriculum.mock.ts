import { Curriculum, Module, Unit } from "@/types/curriculum.types";

export const javascriptCurriculum: Curriculum = {
    id: "curriculum-001",
    trackID: "track-001",
    userID: "user-001",
    shortSummary: "Learn JavaScript fundamentals and build a strong foundation for web development.",
    objectives: [
        "Understand the basics of JavaScript and its role in web development.",
        "Learn to write and execute JavaScript code effectively.",
        "Master core concepts such as variables, functions, loops, and DOM manipulation.",
        "Develop problem-solving skills with hands-on exercises and quizzes.",
    ],
    prerequisites: [
        "Basic computer literacy.",
        "Familiarity with HTML and CSS is recommended but not required.",
    ],
    title: "Mastering JavaScript Fundamentals",
    slug: "mastering-javascript-fundamentals",
    description:
        "This curriculum provides a step-by-step guide to mastering JavaScript through engaging lectures, interactive sessions, quizzes, and practical resources. Tailored for beginners, it ensures a comprehensive understanding of the language and its applications.",
    tags: ["JavaScript", "Programming", "Web Development", "Beginner"],
    isPublic: false,
    isDeleted: false,
    isCompleted: false,
    lastEdited: new Date("2024-12-01"),
    createdAt: new Date("2024-11-28"),
    updatedAt: new Date("2024-12-01"),
};

export const javascriptModules: Module[] = [
    {
        id: "module-001",
        title: "Introduction to JavaScript",
        slug: "introduction-to-javascript",
        shortDescription:
            "An introduction to JavaScript, covering its role in web development and basic syntax.",
        curriculumID: "curriculum-001",

    },
    {
        id: "module-002",
        title: "Variables and Data Types",
        slug: "variables-and-data-types",
        shortDescription:
            "Learn about JavaScript variables, data types, and how to work with them in different contexts.",
        curriculumID: "curriculum-001",
    },
    {
        id: "module-003",
        title: "Functions and Control Flow",
        slug: "functions-and-control-flow",
        shortDescription:
            "Master JavaScript functions, conditionals, loops, and how they control the flow of execution.",
        curriculumID: "curriculum-001",
    },
    {
        id: "module-004",
        title: "DOM Manipulation",
        slug: "dom-manipulation",
        shortDescription:
            "Learn how to manipulate the Document Object Model (DOM) to create dynamic web pages.",
        curriculumID: "curriculum-001",
    },
    {
        id: "module-005",
        title: "Problem-Solving with JavaScript",
        slug: "problem-solving-with-javascript",
        shortDescription:
            "Develop problem-solving skills by working on practical exercises and coding challenges.",
        curriculumID: "curriculum-001",
    },
];

export const javascriptUnits: Unit[] = [
    // Units for "Introduction to JavaScript" module
    {
        id: "unit-001",
        title: "What is JavaScript?",
        slug: "what-is-javascript",
        shortDescription:
            "An overview of what JavaScript is, its history, and its importance in web development.",
        moduleID: "module-001",
        curriculumID: "curriculum-001",
        type: "lecture",
    },
    {
        id: "unit-002",
        title: "Setting Up JavaScript",
        slug: "setting-up-javascript",
        shortDescription:
            "Learn how to set up a JavaScript environment and start writing code in your browser's console.",
        moduleID: "module-001",
        curriculumID: "curriculum-001",
        type: "interactive_session",
    },

    // Units for "Variables and Data Types" module
    {
        id: "unit-003",
        title: "Introduction to Variables",
        slug: "introduction-to-variables",
        shortDescription:
            "Learn what variables are and how to declare them in JavaScript.",
        moduleID: "module-002",
        curriculumID: "curriculum-001",
        type: "lecture",
    },
    {
        id: "unit-004",
        title: "Understanding Data Types",
        slug: "understanding-data-types",
        shortDescription:
            "Explore different data types in JavaScript such as strings, numbers, booleans, and objects.",
        moduleID: "module-002",
        curriculumID: "curriculum-001",
        type: "interactive_session",
    },

    // Units for "Functions and Control Flow" module
    {
        id: "unit-005",
        title: "Introduction to Functions",
        slug: "introduction-to-functions",
        shortDescription:
            "Learn how to create and invoke functions in JavaScript.",
        moduleID: "module-003",
        curriculumID: "curriculum-001",
        type: "lecture",
    },
    {
        id: "unit-006",
        title: "Control Flow with Conditionals",
        slug: "control-flow-with-conditionals",
        shortDescription:
            "Understand how to use `if`, `else`, and `switch` statements to control the flow of your program.",
        moduleID: "module-003",
        curriculumID: "curriculum-001",
        type: "interactive_session",
    },
    {
        id: "unit-007",
        title: "Loops in JavaScript",
        slug: "loops-in-javascript",
        shortDescription:
            "Learn about different types of loops (`for`, `while`, `do-while`) and how to use them to repeat actions.",
        moduleID: "module-003",
        curriculumID: "curriculum-001",
        type: "quiz",
    },

    // Units for "DOM Manipulation" module
    {
        id: "unit-008",
        title: "Introduction to the DOM",
        slug: "introduction-to-the-dom",
        shortDescription:
            "Understand the structure of the DOM and how JavaScript interacts with HTML elements.",
        moduleID: "module-004",
        curriculumID: "curriculum-001",
        type: "lecture",
    },
    {
        id: "unit-009",
        title: "Manipulating DOM Elements",
        slug: "manipulating-dom-elements",
        shortDescription:
            "Learn how to select, modify, and delete HTML elements using JavaScript.",
        moduleID: "module-004",
        curriculumID: "curriculum-001",
        type: "interactive_session",
    },

    // Units for "Problem-Solving with JavaScript" module
    {
        id: "unit-010",
        title: "Problem-Solving Basics",
        slug: "problem-solving-basics",
        shortDescription:
            "Learn how to break down problems and create logical steps to solve them using JavaScript.",
        moduleID: "module-005",
        curriculumID: "curriculum-001",
        type: "lecture",
    },
    {
        id: "unit-011",
        title: "Practical Coding Exercises",
        slug: "practical-coding-exercises",
        shortDescription:
            "Apply what you've learned in a series of hands-on coding exercises that challenge your problem-solving skills.",
        moduleID: "module-005",
        curriculumID: "curriculum-001",
        type: "quiz",
    },
];

