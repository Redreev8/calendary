import { useEffect, useRef, useState } from 'react'

const DirectionMaskImageVerticl = {
    top: '#000,#000,transparent 0,#000 20px',
    left: '#000, #000, transparent 0, #000 20px',
    bottom: '#000 calc(100% - 20px), transparent',
    right: '#000 calc(100% - 20px), transparent'
}

interface PropsScrollTemplate {
    keys: ['top', 'bottom'] | ['left', 'right'], 
    scrollDeriction: 'scrollTop' | 'scrollLeft',
    size: 'clientWidth' | 'clientHeight',
    directionScroll?: 'to right' | undefined
    scrollSize: 'scrollHeight' | 'scrollWidth'
}

type ScroollTemplate = {
    maskImage: string
}

const useScrollShadow = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [styleVerticale, setSyleVerticale] = useState<ScroollTemplate>({maskImage: ''})
    const [styleHorizont, setStyleHorizont] = useState<ScroollTemplate>({maskImage: ''})

    const scrollTemplate = ({ keys, scrollDeriction, size, scrollSize, directionScroll } : PropsScrollTemplate) : ScroollTemplate => {
        if (!ref.current) return { maskImage: '' }
        const tag = ref.current as HTMLElement
        const direction = ['', '']
        console.log({ tag });
        
        if (tag[scrollDeriction] === 0 && tag[scrollSize] - tag[size] !== 0) {
            direction[1] = DirectionMaskImageVerticl[keys[1]]
        }
        if (tag[scrollDeriction] > 0 && tag[scrollDeriction] !== tag[scrollSize] - tag[size] && tag[scrollSize] - tag[size] !== 0) {
            direction[0] = DirectionMaskImageVerticl[keys[0]] 
            direction[1] = DirectionMaskImageVerticl[keys[1]]            
        }
        if (tag[scrollDeriction] === tag[scrollSize] - tag[size] && tag[scrollSize] - tag[size] !== 0) {
            direction[0] = DirectionMaskImageVerticl[keys[0]]           
        }

        return {
            maskImage: `linear-gradient(${directionScroll ? `${directionScroll},`: ''} ${direction.reduce((str, el) => {
                if (el.length === 0) return str
                if (str.length === 0) return el
                return `${str}, ${el}`
            }, '')})`
        }
    }
    const handelScroll = () => {
        setSyleVerticale(() => scrollTemplate({ 
            keys: ['top', 'bottom'], 
            scrollDeriction: 'scrollTop', 
            size: 'clientHeight',
            scrollSize: 'scrollHeight'
        }))
        setStyleHorizont(() => scrollTemplate({ 
            keys: ['left', 'right'], 
            scrollDeriction: 'scrollLeft', 
            size: 'clientWidth',
            directionScroll: 'to right',
            scrollSize: 'scrollWidth'
        }))
    }

    useEffect(() => {
        handelScroll()
    }, [])
    return { handelScroll, refScrooll: ref, styleVerticale, styleHorizont }
}

export default useScrollShadow