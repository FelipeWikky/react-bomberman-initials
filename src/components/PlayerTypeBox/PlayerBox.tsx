import { memo, useEffect } from "react";
import { useGameConfig, useGamePosition, useGameContext } from "../../hooks/useGame";
import { Palette } from "../../theme/palette";
import { ARROW } from "../../types/game";
import { BoxComponent } from "./Box";

const PlayerBoxComponent: React.FC = () => {
    console.log('PlayerBoxComponent ')

    const {
        gotoUp, gotoDown, gotoRight, gotoLeft
    } = useGamePosition();
    const { PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_DELAY } = useGameConfig();

    const { position, direction } = useGameContext();

    useEffect(() => {
        window.addEventListener('keydown', ev => {
            if (ev.key && ev.key.trim()) {
                switch (ev.key) {
                    case ARROW.UP:
                        return gotoUp();
                    case ARROW.DOWN:
                        return gotoDown();
                    case ARROW.LEFT:
                        return gotoLeft();
                    case ARROW.RIGHT:
                        return gotoRight();
                }
            }
        });
    }, []);

    return <BoxComponent
        color={Palette.PLAYER}
        height={PLAYER_HEIGHT}
        width={PLAYER_WIDTH}
        position={position}
        direction={direction}
        delay={PLAYER_DELAY}
    />
}

export const PlayerBox = memo(PlayerBoxComponent);