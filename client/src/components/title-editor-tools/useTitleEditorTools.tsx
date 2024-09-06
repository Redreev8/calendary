import { ChangeEvent, KeyboardEvent, useContext, useRef } from 'react'
import { TitleEditorTools, TitleEditorToolsData } from './title-editor-tools'
import { EditorContext } from '../../UI/editor/editor'
import { EditorContenxt } from '../../UI/editor/type-editor'

const useTitleEditorTools = ({ time }: TitleEditorToolsData) => {
    const { setBlocks, addBlock } = useContext<EditorContenxt<TitleEditorTools>>(EditorContext)
    const ref = useRef<HTMLDivElement>(null)
    const handelChange = (e: ChangeEvent<HTMLDivElement>) => {
        if (!e.target!.textContent && !setBlocks) return
        setBlocks!(prev => {
            prev.forEach(block => {
                if(block.time !== time) return
                block.data.children = e.target!.textContent
            })
            return prev
        })	
    }
    const handelKeyDownBlock = (e: KeyboardEvent<HTMLParagraphElement>) => {
        if (e.key !== 'Enter' ) return
        e.preventDefault()
        if (!addBlock) return
        addBlock(time)
    }
    return {
        ref,
        handelChange,
        handelKeyDownBlock,
    }
}

export default useTitleEditorTools