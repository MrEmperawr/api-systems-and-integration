export interface IBook {
    id: number;
    ISBN: string;
    title: string;
}

export const books: IBook[] = [
    { id: 1, title: "The Hobbit", ISBN: "9780044403371" },
    { id: 2, title: "The Silmarillion", ISBN: "9780261103665" },
    { id: 3, title: "The Count of Montecristo", ISBN: "9780199219650" },
]