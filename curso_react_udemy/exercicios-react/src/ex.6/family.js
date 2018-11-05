import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Family's Members</h1>
        {/* {props.children} */}
        
        {/* { React.Children.map(props.children,
            child => React.cloneElement(child, {...props})) } */}

        { childrenWithProps(props.children, props) }
        
    </div>
)