import { useEffect, useRef } from 'react'

const useScroll = (cb: () => void) => {
    const ref = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if (ref.current) ref.current.addEventListener('scroll', cb)

        return () => {
            console.log(ref.current);
            
            if (ref.current) ref.current.removeEventListener('scroll', cb)
        }
    }, [ref.current])
    return ref
}

export default useScroll