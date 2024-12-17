import {User} from "@/types/auth.types";
import {LearningTrack} from "@/types/track.types";

export interface Curriculum {
    id: string;
    track: LearningTrack;
    user: User;
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
    curriculum: Curriculum;
}

export interface Unit {
    id: string;
    title: string;
    slug: string;
    shortDescription: string;
    modules: Module;
    type: UnitType;
}

export type UnitType = 'lecture' | 'interactive_session' | 'quiz' | 'resources' ;

export interface CurriculumAPIResponse {
    curriculum: Curriculum;
    modules: Module[];
    lessons: Unit[];
}
