import { createContext, useState } from "react";
import { ARROW, Position } from "../types/game";

type GameContextProps = {
    gamePosition: Position;
    setGamePosition: React.Dispatch<React.SetStateAction<Position>>;

    direction?: ARROW;
    setDirection: React.Dispatch<React.SetStateAction<ARROW | undefined>>;

    points: number;
    setPoints: React.Dispatch<React.SetStateAction<number>>;
}

const GameContext = createContext<GameContextProps>({} as GameContextProps);

export const GameProvider: React.FC = ({ children }) => {
    const [gamePosition, setGamePosition] = useState<Position>({ X: 0, Y: 0 });
    const [direction, setDirection] = useState<ARROW>();
    const [points, setPoints] = useState(0);

    return (
        <GameContext.Provider value={{
            gamePosition, setGamePosition,
            direction, setDirection,
            points, setPoints,
        }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContext;