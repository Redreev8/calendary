import { ChangeEvent, KeyboardEvent, ReactNode, useContext, useEffect, useRef } from 'react'
import Text from './text'
import { EditorContenxt, RenderProps, Tools } from '../editor/type-editor'
import { EditorContext } from '../editor/editor'
import setCursorEditable from '../../helper/set-cursor-editable'

interface ToolTextData extends RenderProps {
	data: {
		children: ReactNode
	}
}

export interface ToolText extends Tools {
	'text': {
		data: ToolTextData['data'],
        render: (props: ToolTextData) => ReactNode 
	},
}

const toolText: ToolText = {
    'text': {
        data: {
            children: ' ',
        },
        render: ({ data, time }) => {
            const { setBlocks, isMounted, addBlock, removeBlock } = useContext<EditorContenxt<ToolText>>(EditorContext)
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
            return (
                <Text
                    onDoubleClick={() => removeBlock(time)}
                    ref={ ref }
                    onKeyDown={ handelKeyDownBlock }
                    onBlur={ handelBlur }
                    onInput={ handelChange } 
                    suppressContentEditableWarning={true}
                    contentEditable='true'
                >
                    { data.children }
                </Text>
            )
        }
    }
}

export default toolText