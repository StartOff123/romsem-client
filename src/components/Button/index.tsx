import React from 'react'
import classNames from 'classnames'

import './button.scss'

const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={classNames(
            'button text-white bg-orange-500 px-10 py-1 transition-all border-none outline-none cursor-pointer',
            className
        )}>
            {children}
        </button>
    )
}

export default Button