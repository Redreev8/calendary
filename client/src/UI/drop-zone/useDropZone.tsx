import { DragEvent, useRef, useState } from 'react'

const useDropZone = () => {
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const ref = useRef<HTMLInputElement>(null)

    const onDragEnter = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDrag(true)
    }
    const onDragLeave = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDrag(false)
    }
    const onDragOver = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const onDrop = (e: DragEvent) => {
        if (!ref.current) return
        e.preventDefault()
        e.stopPropagation()
        
        ref.current!.files = e.dataTransfer.files

        const ev2 = new Event('change', { bubbles: true});
        ref.current!.dispatchEvent(ev2)

        setIsDrag(false)
    }
    const click = () => {
        if (!ref.current) return
        ref.current.click()
    }

    return {
        isDrag,
        ref,
        onDragEnter,
        onDragLeave,
        onDragOver,
        onDrop,
        click
    }
}

export default useDropZone