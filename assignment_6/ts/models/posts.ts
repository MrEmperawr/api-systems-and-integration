export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostData {
    userId: number;
    title: string;
    body: string;
}

export interface PartialPost {
    userId: number;
    title: string;
    body: string;
}