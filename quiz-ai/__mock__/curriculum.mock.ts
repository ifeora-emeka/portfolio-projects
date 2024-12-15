
import { Curriculum } from "@/types/curriculum.types";

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

