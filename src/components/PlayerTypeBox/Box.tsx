import React from "react";
import { ARROW, Position } from "../../types/game";
import { useStyles } from "./styles";

type BoxProps = {
    color: string;
    height: number;
    width: number;
    position: Position;
    direction?: ARROW;

    [others:string]: any;
}
const BoxComponent: React.FC<BoxProps> = ({children, ...props}) => {
    const classes = useStyles({
        ...props,
        isUser: !!(props.direction),
    });

    return (
        <div className={`${classes.playerBox}`}>
            &nbsp;
        </div>
    );

}

export { BoxComponent }