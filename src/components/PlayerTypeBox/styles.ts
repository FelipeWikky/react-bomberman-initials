import { makeStyles } from "@mui/styles";
import { ARROW, Position } from "../../types/game";
import React from "react";

type StyleProps = {
    height: number;
    width: number;
    position: Position;
    
    direction?: ARROW;
    color?: string;
    quantity?: number;
    isUser?: boolean;
    delay?: number;
}

const gerBorder = (direction?: ARROW, quantity?: number, isUser?: boolean): React.CSSProperties => {
    if (!quantity || !direction || quantity === 1) return { borderRadius: '50%' }

    const borderValue = '10px';
    let border: React.CSSProperties = { borderRadius: borderValue };

    if (!isUser) {
        return border;
    }

    border = {borderRadius: '0px'}
    switch (direction) {
        case ARROW.UP:
            return { ...border, borderTopLeftRadius: borderValue, borderTopRightRadius: borderValue };
        case ARROW.DOWN:
            return { ...border, borderBottomLeftRadius: borderValue, borderBottomRightRadius: borderValue };
        case ARROW.LEFT:
            return { ...border, borderTopLeftRadius: borderValue, borderBottomLeftRadius: borderValue };
        case ARROW.RIGHT:
            return { ...border, borderTopRightRadius: borderValue, borderBottomRightRadius: borderValue };
        default: return border;
    }
}



export const useStyles = makeStyles(theme => ({
    playerBox: (props: StyleProps) => {
        return ({
            height: `${props.height}px`,
            width: `${props.width * (props.quantity ?? 1)}px`,
            backgroundColor: props.color ?? 'red',
            position: 'absolute',
            top: ((props.position?.Y ?? 0) * 16) - 1,
            left: ((props.position?.X ?? 0) * 16) - 1,
            transition: props.delay ? `${props.delay}ms` : '500ms',
            ...gerBorder(props.direction, props.quantity, props.isUser),
        })
    }
}));