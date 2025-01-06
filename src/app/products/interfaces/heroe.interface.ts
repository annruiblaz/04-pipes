export enum Color {
    red, black, blue, green, yellow, purple, white
}

export interface Hero {
    name: string;
    canFly: boolean;
    color: Color;
}