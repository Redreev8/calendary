import { ReactNode } from 'react'
import { RenderProps, Tools } from '../editor/type-editor'
import useToolInput from '../input/useToolInput'
import InputDateTime from './input-date-time'
import Label from '../label'
import Btn from '../btn'

export interface ToolInputDateTimeData extends RenderProps {
	data: {
		value: string
	}
}

export interface ToolInputDateTime extends Tools {
	'input-date-time': {
		data: ToolInputDateTimeData['data'],
        render: (props: ToolInputDateTimeData) => ReactNode 
	},
}

const toolInputDateTime: ToolInputDateTime = {
    'input-date-time': {
        data: {
            value: '',
        },
        render: ({ data, time }) => {
            const {
                removeBlock,
                handelBlur,
                ref
            } = useToolInput({ data, time } as ToolInputDateTimeData)
            return (
                <Label label isHidenLabel>
                    <InputDateTime
                        ref={ ref }
                        onBlur={ handelBlur }
                    />
                    <Btn onClick={() => removeBlock(time)}>Удалить</Btn>
                </Label>
            )
        }
    }
}

export default toolInputDateTime