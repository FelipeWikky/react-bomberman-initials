import Grid from "@mui/material/Grid";
import { memo } from "react";
import { useGameConfig, useGameContext } from "../../hooks/useGame";
import { PlayerBox } from "../PlayerTypeBox/PlayerBox";
import { ResourceBox } from "../PlayerTypeBox/ResourceBox";

function GameScreen() {
    console.log('GameScreen')
    
    const { SCREEN_HEIGHT, SCREEN_WIDTH } = useGameConfig();
    const {pointPosition} = useGameContext();

    return (
        <Grid container style={{
            height: SCREEN_HEIGHT,
            width: SCREEN_WIDTH,
            border: '1px solid black',
            position: 'relative',
        }}
        >
            <Grid item sm md lg container justifyContent={'center'} alignItems={'center'}>
                <ResourceBox position={pointPosition} />
                <PlayerBox  />
            </Grid>
        </Grid>
    )
}

export default memo(GameScreen);
