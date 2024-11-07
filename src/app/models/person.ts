export interface Person{
    age: number;
    height: number;
    name: string;
    gender: Gender;
    alive: boolean
}

export enum Gender{
    MALE,
    FEMALE
    
}