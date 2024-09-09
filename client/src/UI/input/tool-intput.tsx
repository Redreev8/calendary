import { ReactNode } from 'react'
import { RenderProps, Tools } from '../editor/type-editor'
import useToolInput from './useToolInput'
import Input from './input'
import Label from '../label'
import Btn from '../btn'

export interface ToolInputData extends RenderProps {
	data: {
		value: string
	}
}

export interface ToolInput extends Tools {
	'text': {
		data: ToolInputData['data'],
        render: (props: ToolInputData) => ReactNode 
	},
}

const toolInput: ToolInput = {
    'text': {
        data: {
            value: '',
        },
        render: ({ data, time }) => {
            const {
                removeBlock,
                handelBlur,
                ref
            } = useToolInput({ data, time } as ToolInputData)
            return (
                <Label label isHidenLabel>
                    <Input
                        type='text'
                        ref={ ref }
                        onBlur={ handelBlur }
                    />
                    <Btn onClick={() => removeBlock(time)}>Удалить</Btn>
                </Label>
            )
        }
    }
}

export default toolInput