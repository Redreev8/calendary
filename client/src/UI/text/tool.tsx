import { ReactNode } from 'react'
import Text from './text'
import { RenderProps, Tools } from '../editor/type-editor'
import useToolText from './useToolText'

export interface ToolTextData extends RenderProps {
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
            const {
                removeBlock,
                ref,
                handelChange,
                handelBlur,
                handelKeyDownBlock,
            } = useToolText({ data, time } as ToolTextData)
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