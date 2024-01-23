export interface login {
    username: string;
    password: string;
}

export interface book {
    id: number,
    name: string,
    rating: number,
    author: string,
    genre: string,
    isBookAvailable: boolean,
    lentByUserId: string,
    borrowedByUserId: string,
    description: string
}

export interface user{
    id: number,
    name: string,
    userName: string,
    password: string,
    tokensAvailable: number
}