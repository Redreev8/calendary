import { useContext, useEffect, useRef } from 'react'
import { ToolInput, ToolInputData } from './tool-intput'
import { EditorContenxt } from '../editor/type-editor'
import { EditorContext } from '../editor/editor'

const useToolInput = ({ data, time }: ToolInputData) => {
    const { setBlocks, isMounted, removeBlock } = useContext<EditorContenxt<ToolInput>>(EditorContext)
    const ref = useRef<HTMLInputElement>(null)
    const handelBlur = () => {
        setBlocks!(blocks => {
            return blocks.map(block => {
                if (block.time === time) {
                    block.data.value = ref!.current!.value
                }

                return block
            })
        })
    }
    useEffect(() => {
        if (ref.current) {
            ref!.current!.value = data.value
        }
    }, [isMounted])
    return {
        removeBlock,
        handelBlur,
        ref
    }
}

export default useToolInput