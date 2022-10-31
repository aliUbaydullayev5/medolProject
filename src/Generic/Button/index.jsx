import React from 'react'
import {Block} from "./style"

const Button = ({margin, children, click}) => {
    return(
        <Block onClick={()=> click && click()} margin={margin}>
            {children}
        </Block>
    )
}

export default Button