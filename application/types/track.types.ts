
export interface LearningTrack {
    id: string;
    title: string;
    description: string;
    tags: string[];
    isPublic: boolean;
    isDeleted: boolean;
    isCompleted: boolean;
    lastEdited: Date;
    createdAt: Date;
    updatedAt: Date;
}
