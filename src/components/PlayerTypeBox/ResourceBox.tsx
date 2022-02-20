import { useEffect } from "react";
import { useGameConfig } from "../../hooks/useGame";
import { Palette } from "../../theme/palette";
import { Position } from "../../types/game";
import { BoxComponent } from "./Box";

type ResourceBoxProps = {
    position: Position;
}

const ResourceBoxComponent: React.FC<ResourceBoxProps> = ({position}) => {
    console.log('ResourceBoxComponent');

    const { PLAYER_HEIGHT, PLAYER_WIDTH } = useGameConfig();

    return <BoxComponent
        color={Palette.RESOURCE}
        height={PLAYER_HEIGHT}
        width={PLAYER_WIDTH}
        position={position}
    />
}

export const ResourceBox = ResourceBoxComponent