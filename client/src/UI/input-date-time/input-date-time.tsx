import { forwardRef, InputHTMLAttributes } from 'react'
import style from './input-date-time.module.scss'
import styleDate from '../input-date/input-date.module.scss'
import styleTime from '../input-time/input-time.module.scss'
import classNames from 'classnames'
import Input from '../input/input'
interface InputDateTimeProps  extends InputHTMLAttributes<HTMLInputElement> {}

const InputDateTime = forwardRef<HTMLInputElement, InputDateTimeProps>(({ className, ...props }, ref) => {
    return (
        <Input 
            ref={ ref }
            className={
                classNames(
                    style['input-date-time'],
                    styleDate['input-date'],
                    styleTime['input-time'],
                    className,
                )
            }
            type='datetime-local'
            { ...props }
        />
    )
})

export default InputDateTime