
export interface User {
    id: string;
    email: string;
    name: string;
    avatar: string | null;
    lastLogin: Date;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}
