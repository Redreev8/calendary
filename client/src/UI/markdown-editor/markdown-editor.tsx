import { FC } from 'react'
import style from './markdown-editor.module.scss'
import classNames from 'classnames'
interface MarkdownEditorProps {
    className?: string
}

const MarkdownEditor: FC<MarkdownEditorProps> = ({ className }) => {
    return (
        <div 
            suppressContentEditableWarning={true} 
            contentEditable='true' 
            className={ classNames(style['markdown-editor'], className) }
        >
        </div>
    )
}

export default MarkdownEditor