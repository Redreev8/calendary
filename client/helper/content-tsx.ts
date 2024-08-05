import formatWord from "./format-word" 

export default (name: string) => `import { FC } from 'react'
import style from './${name}.module.scss'
import classNames from 'classnames'
interface ${formatWord(name, 'PascalCase')}Interface {
    className?: string
}

const ${formatWord(name, 'PascalCase')}: FC<${formatWord(name, 'PascalCase')}Interface> = ({ className }) => {
    const cl = classNames(style.logo, className)
    return (

    )
}

export default ${formatWord(name, 'PascalCase')}`