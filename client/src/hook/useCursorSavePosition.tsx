import { useEffect, useRef } from 'react'
import setCursorEditable from '../helper/set-cursor-editable'

const useCursorSavePosition = (props: any) => {
    const ref = useRef<HTMLDivElement>(null)
    const refCursorPosition = useRef<number | null>(null)
    useEffect(() => {
        if (ref.current && typeof refCursorPosition.current === 'number') {
            setCursorEditable(ref.current, refCursorPosition.current)
        }
    }, [props])

    return {
        ref,
        refCursorPosition,
    }
}

export default useCursorSavePosition