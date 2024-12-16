import {User} from "@/types/auth.types";

export interface Curriculum {
    id: string;
    trackID: string;
    userID: string;
    shortSummary: string;
    objectives: string[];
    prerequisites: string[];
    title: string;
    slug: string;
    description: string;
    tags: string[];
    isPublic: boolean;
    isDeleted: boolean;
    isCompleted: boolean;
    lastEdited: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface Module {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    curriculumID: string;
}

export interface Unit {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    moduleID: string;
    curriculumID: string;
    type: UnitType;
}

export type UnitType = 'lecture' | 'interactive_session' | 'quiz' | 'resources' ;

export interface CurriculumAPIResponse {
    curriculum: Curriculum;
    modules: Module[];
    units: Unit[];
}
