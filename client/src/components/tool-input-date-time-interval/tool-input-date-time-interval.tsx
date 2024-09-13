import { ReactNode, useContext, useEffect, useRef } from 'react'
import { EditorContenxt, RenderProps, Tools } from '../../UI/editor/type-editor'
import style from './tool-input-date-time-interval.module.scss'
import InputDateTime from '../../UI/input-date-time'
import Label from '../../UI/label'
import Btn from '../../UI/btn'
import Input from '../../UI/input/input'
import { EditorContext } from '../../UI/editor/editor'

export interface ToolInputDateTimeDataInteval extends RenderProps {
	data: {
		date: string
        inteval: string
	}
}

export interface ToolInputDateTimeInteval extends Tools {
	'input-date-time-inteval': {
		data: ToolInputDateTimeDataInteval['data'],
        render: (props: ToolInputDateTimeDataInteval) => ReactNode 
	},
}

const toolInputDateTimeInteval: ToolInputDateTimeInteval = {
    'input-date-time-inteval': {
        data: {
            date: '',
            inteval: '',
        },
        render: ({ data, time }) => {
            const { blocks, setBlocks, isMounted, removeBlock } = useContext<EditorContenxt<ToolInputDateTimeInteval>>(EditorContext)
            const refInputDateTime = useRef<HTMLInputElement>(null)
            const refInputInterval = useRef<HTMLInputElement>(null)
            const handelBlur = () => {
                console.log(true);
                if (!setBlocks) return
                
                setBlocks(prev => prev.map(block => {
                    if (time === block.time) {
                        block.data.date = refInputDateTime.current!.value
                        block.data.inteval = refInputInterval.current!.value
                    }
                    return block
                }))
            }
            useEffect(() => {
                if (refInputDateTime.current && refInputInterval.current) {
                    refInputDateTime.current.value = data.date
                    refInputInterval.current.value = data.inteval
                }
            }, [isMounted])
            return (
                <Label label isHidenLabel>
                    <span className={ style.row }>
                        <InputDateTime onBlur={ handelBlur } className={ style['input--date-time'] } ref={ refInputDateTime } />
                        <Input onBlur={ handelBlur } className={ style['input--interval'] } ref={ refInputInterval }/>
                    </span>
                    <Btn disabled={ blocks.length <= 1 } onClick={() => removeBlock(time)}>Удалить</Btn>
                </Label>
            )
        }
    }
}

export default toolInputDateTimeInteval