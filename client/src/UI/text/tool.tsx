import { ChangeEvent, ReactNode } from 'react'
import getCursorPosition from '../../helper/get-cursor-position'
import useCursorSavePosition from '../../hook/useCursorSavePosition'
import Text from './text'
import { EventToolRender, RenderProps, Tools } from '../editor/editor'

interface ToolTextData extends RenderProps {
	data: {
		children: ReactNode
	}
}

export interface ToolText extends Tools {
	'text': {
		data: ToolTextData['data'],
        render: (props: ToolTextData, event: EventToolRender) => ReactNode 
	},
}

const toolText: ToolText = {
    'text': {
        data: {
            children: '',
        },
        render: ({ props, data, key }, { onChange }) => {
            const {ref, refCursorPosition} = useCursorSavePosition(data.children)
            const handelChange = (e: ChangeEvent<HTMLDivElement>) => {
                if (!e.target!.textContent) return
                refCursorPosition.current = getCursorPosition(e.target)								
                onChange({
                    text: e.target!.textContent!
                })
            }
            const handelBlur = () => {
                refCursorPosition.current = null
            }
            return (
                <Text
                    ref={ ref }
                    onBlur={ handelBlur }
                    onInput={ handelChange } 
                    suppressContentEditableWarning={true}
                    contentEditable='true' 
                    key={key} { ...props }
                >
                    { data.children }
                </Text>
            )
        }
    }
}

export default toolText