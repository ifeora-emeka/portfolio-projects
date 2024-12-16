
export interface LearningTrack {
    id: string;
    title: string;
    description: string;
    tags: string[];
    isPublic: boolean;
    isDeleted: boolean;
    isCompleted: boolean;
    lastEdited: Date;
    difficultyLevel: 'beginner' | 'intermidiate' | 'advanced' | 'expert';
    createdAt: Date;
    updatedAt: Date;
    userID: string;
}
