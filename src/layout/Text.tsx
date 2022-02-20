import React from "react";

type TextProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {

}

export const Text: React.FC<TextProps> = ({ children, style, ...props }) => {
    return (
        <span
            {...props}
            style={{
                fontFamily: 'Roboto',
                ...style,
            }}
        >
            {children}
        </span>
    );
};