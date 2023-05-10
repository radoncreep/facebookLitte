

export interface User { 
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    dateOfBirth?: string;
    joinedAt: Date;
}