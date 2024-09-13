import { ChangeEvent, ForwardedRef, forwardRef } from 'react'
import style from './drop-zone.module.scss'
import classNames from 'classnames'
import useDropZone from './useDropZone'
interface DropZoneProps {
    className?: string
    children?: JSX.Element[]
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    isMultiple?: boolean  
}

const initinalRef = (n: HTMLElement | null, ref: ForwardedRef<any>) => {
    if (!ref || !n) return
    if (typeof ref === 'function') {
        ref(n)
        return
    }
    if (typeof ref === 'object') {
        ref.current = n
    }
}

const DropZone = forwardRef<HTMLInputElement, DropZoneProps>(({ className, children, isMultiple, onChange }, refForward) => {
    const {
        isDrag,
        ref,
        onDragEnter,
        onDragLeave,
        onDragOver,
        onDrop,
        click
    } = useDropZone()    
    return (
        <>
        <input
            onChange={ onChange }
            ref={ node => {
                initinalRef(node, ref)
                initinalRef(node, refForward)
            } }
            type="file"
            multiple={ isMultiple }
            className='visually-hidden'
        />
        {
            !isDrag && children!.length > 0 ?
                <div
                    className={ classNames(className) }
                    onDragEnter={ onDragEnter }
                    onDragOver={ onDragOver }
                >
                    { children }
                </div> :
                <div 
                    className={ classNames(className, style.wrapp) }
                    onClick={ click }
                    onDrop={ onDrop }
                    onDragLeave={ onDragLeave }
                    onDragOver={ onDragOver }
                >
                    <div  className={ style.zone }>
                        Перетащите сюда
                    </div>
                </div>
        }
    </>
    )
})

export default DropZone