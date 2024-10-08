import { ChangeEvent, KeyboardEvent, useContext, useEffect, useRef } from 'react'
import { EditorContenxt } from '../editor/type-editor'
import { ToolText, ToolTextData } from './tool'
import { EditorContext } from '../editor/editor'
import setCursorEditable from '../../helper/set-cursor-editable'

const useToolText = ({ time }: ToolTextData) => {
    const { setBlocks, isMounted, changeBlock, addBlock, removeBlock } = useContext<EditorContenxt<ToolText>>(EditorContext)
    const ref = useRef<HTMLDivElement>(null)
    const handelChange = (e: ChangeEvent<HTMLDivElement>) => {
        if (!e.target!.textContent && !setBlocks) return	
        changeBlock(time, { children: e.target!.textContent })
    }
    const handelBlur = () => {
    }
    const handelKeyDownBlock = (e: KeyboardEvent<HTMLParagraphElement>) => {
        if (e.key !== 'Enter' ) return
        e.preventDefault()
        if (!addBlock) return
        addBlock(time)
    }
    useEffect(() =>  {
        if (ref.current && isMounted) {                    
            setCursorEditable(ref.current, 0)
        }
    }, [])
    return {
        removeBlock,
        ref,
        handelChange,
        handelBlur,
        handelKeyDownBlock,
    }
}

export default useToolText