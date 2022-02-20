import { ARROW } from "../types/game";

export const getXYByArrow = (arrow: ARROW) => {
    switch (arrow) {
        case ARROW.UP:
            return 'y';
        case ARROW.DOWN:
            return 'y';
        case ARROW.LEFT:
            return 'x';
        case ARROW.RIGHT:
            return 'x';
    }
}