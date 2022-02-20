export type Position = {
    X: number;
    Y: number;
}

export enum POSITION {
    X = 'X', Y = 'Y'
}

export enum ARROW {
    UP = 'ArrowUp', DOWN = 'ArrowDown',
    RIGHT = 'ArrowRight', LEFT = 'ArrowLeft'
}

export enum PlayerType {
    USER = 'USER', ENEMY = 'ENEMY', RESOURCE = 'RESOURCE'
}