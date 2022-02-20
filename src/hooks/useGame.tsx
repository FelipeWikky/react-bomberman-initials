import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import GameContext from "../contexts/game";
import { POSITION, ARROW, Position } from "../types/game";

export const useGamePosition = () => {
    const { setDirection, setPosition, } = useGameContext();

    const { BALL_QUANTITY,
        PLAYER_HEIGHT, PLAYER_WIDTH,
        SCREEN_HEIGHT, SCREEN_WIDTH,
    } = useGameConfig();

    const gotoUp = useCallback(() => {
        // setDirection(ARROW.UP);
        setPosition(prev => prev.Y > 0
            ? { ...prev, [POSITION.Y]: prev[POSITION.Y] - 1 }
            : prev);
    }, []);

    const gotoDown = useCallback(() => {
        // setDirection(ARROW.DOWN);
        setPosition(prev => prev.Y < (SCREEN_HEIGHT / PLAYER_HEIGHT) - BALL_QUANTITY
            ? { ...prev, [POSITION.Y]: prev[POSITION.Y] + 1 }
            : prev);
    }, []);

    const gotoLeft = useCallback(() => {
        // setDirection(ARROW.LEFT);
        setPosition(prev => prev.X > 0
            ? { ...prev, [POSITION.X]: prev[POSITION.X] - 1 }
            : prev);
    }, []);

    const gotoRight = useCallback(() => {
        // setDirection(ARROW.RIGHT);
        setPosition(prev => prev.X < (SCREEN_WIDTH / PLAYER_WIDTH) - BALL_QUANTITY
            ? { ...prev, [POSITION.X]: prev[POSITION.X] + 1 }
            : prev);
    }, []);


    return {
        gotoUp, gotoDown, gotoLeft, gotoRight,
    }

}

export const useGameConfig = () => {

    const BALL_QUANTITY = useMemo(() => 1, []);

    const PLAYER_DELAY = useMemo(() => 500, []);

    const PLAYER_HEIGHT = useMemo(() => 16, []);
    const PLAYER_WIDTH = useMemo(() => 16, []);
    const DIMENSION_X = useMemo(() => 10, []);
    const DIMENSION_Y = useMemo(() => 10, []);

    const SCREEN_HEIGHT = useMemo(() => PLAYER_HEIGHT * DIMENSION_Y, []);
    const SCREEN_WIDTH = useMemo(() => PLAYER_WIDTH * DIMENSION_X, []);

    return {
        BALL_QUANTITY,
        PLAYER_DELAY,
        PLAYER_HEIGHT, PLAYER_WIDTH,
        SCREEN_HEIGHT, SCREEN_WIDTH,
        DIMENSION_X, DIMENSION_Y,
    }
}

export const useGameContext = () => {
    const {
        gamePosition: position,
        setGamePosition: setPosition,
        direction, setDirection,
        points, setPoints
    } = useContext(GameContext);

    const { DIMENSION_X, DIMENSION_Y, PLAYER_DELAY } = useGameConfig();

    const [pointPosition, setPointPosition] = useState<Position>({
        X: Math.floor(Math.random() * DIMENSION_X - 1 + 1),
        Y: Math.floor(Math.random() * DIMENSION_Y - 1 + 1),
    });

    useEffect(() => {
        if (position.X === pointPosition.X && position.Y === pointPosition.Y) {
            console.log('goal')
            setPoints(prev => prev + 1);
            setTimeout(() => {
                setPointPosition({
                    X: Math.floor(Math.random() * DIMENSION_X - 1 + 1),
                    Y: Math.floor(Math.random() * DIMENSION_Y - 1 + 1),
                })
            }, (PLAYER_DELAY));
        }
    }, [position, pointPosition]);

    return {
        position, setPosition,
        pointPosition, setPointPosition,
        direction, setDirection,
        points, setPoints
    }
};