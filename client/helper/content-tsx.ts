import formatWord from "./format-word" 

export default (name: string) => `import { FC } from 'react'
import style from './${name}.module.scss'
import classNames from 'classnames'
interface ${formatWord(name, 'PascalCase')}Props {
    className?: string
}

const ${formatWord(name, 'PascalCase')}: FC<${formatWord(name, 'PascalCase')}Props> = ({ className }) => {
    const cl = classNames(style.${name}, className)
    return (

    )
}

export default ${formatWord(name, 'PascalCase')}`