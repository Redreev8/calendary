import { FC, useContext } from 'react'
import style from './btn-editor-create.module.scss'
import classNames from 'classnames'
import Btn from '../../UI/btn'
import { EditorContenxt, Tools } from '../../UI/editor/type-editor'
import { EditorContext } from '../../UI/editor/editor'
interface BtnEditorCreateProps {
    className?: string
}

const BtnEditorCreate: FC<BtnEditorCreateProps> = ({ className }) => {
    const { blocks, addBlock } = useContext<EditorContenxt<Tools>>(EditorContext)

    const handelClick = () => {
        console.log(blocks);
        
        addBlock()
    }

    return (
        <Btn onClick={ handelClick } isFull className={ classNames(style['btn'], className) }>
            Добавить
        </Btn>
    )
}

export default BtnEditorCreate