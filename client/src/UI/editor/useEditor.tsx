import { useState } from 'react'
import useIsMounted from '../../hook/useIsMounted'
import { block, EditorProps, Tools } from './type-editor'

const useEditor = <T extends Tools>({  
    initinalBlocks, 
    tools, 
    initinalDefaultBlocks 
}: Pick<EditorProps<T>, 'tools' | 'initinalBlocks' | 'initinalDefaultBlocks'>) => {
    const [blocks, setBlocks] = useState<block<T>[]>(initinalBlocks ?? [])
    const [defaultBlocks, setDefaultBlocks] = useState<keyof T>(initinalDefaultBlocks ?? Object.keys(tools)[0])
    const isMounted = useIsMounted()
    const addBlock = (time?: number) => {
        const newTime = Date.now()
        const newBlock = {
            type: defaultBlocks,
            data: { ...tools[defaultBlocks].data },
            time: newTime
        }
        let isDauble = false
        setBlocks(blocks => {
            if (isDauble) return blocks
            isDauble = true
            if (!time) {
                blocks.push(newBlock)
                return [...blocks]
            }
            for (let i = 0; i < blocks.length; i++) {
                const block = blocks[i]
                if(block.time === time) {
                    blocks.splice(i + 1, 0, 
                        {
                            type: defaultBlocks,
                            data: { ...tools[defaultBlocks].data },
                            time: newTime
                        })
                    break
                }
            }
            return [...blocks]
        }) 
    }
    const removeBlock = (time: number) => {
        setBlocks(blocks => blocks.filter(block => block.time !== time))
    }
    return { 
        blocks, 
        setBlocks,
        isMounted, 
        setDefaultBlocks, 
        addBlock,
        removeBlock
    }
}

export default useEditor