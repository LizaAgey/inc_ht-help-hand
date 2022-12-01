import React from 'react';
import s from "./Button.module.css"

//----------------------------------------Type 1

// type ButtonType = {
//     name: string,
//     callback: () => void
//     color: string
//     children?: React.ReactNode
//     sizeButton?: string
// }
//
// const Button: React.FC<ButtonType> = ({
//                                                name,
//                                                callback,
//                                                color,
//                                                children,
//                                                ...props
//                                            }) => {
//     const callbackHandler = () => {
//         callback()
//         console.log(props.sizeButton)
//     };
//
//     return (
//         <button onClick={callbackHandler}>{children}</button>
//     );
// };
//
// export default Button;

//----------------------------------------Type 2

type ButtonType = {
    // name: string,
    callback: () => void
    color?: string
    children?: React.ReactNode
    sizeButton?: string
    disabled?: boolean
}

const Button: React.FC<ButtonType> = (props) => {
    const {callback, color, children, disabled, ...otherProps} = props
    const callbackHandler = () => {
        callback()
        console.log(otherProps.sizeButton)
    };

    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    const finalClassName = `${s.button} ${color === "red" ? s.red : color === "secondary" ? s.secondary : s.default} ${disabled ? s.disabled : ""}`


    return (
        <button onClick={callbackHandler} className={finalClassName}>{children}</button>
    );
};

export default Button;