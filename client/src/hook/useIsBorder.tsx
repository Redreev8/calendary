'use client'
import { useEffect, useState } from 'react'

type SIDE = 'top' | 'left' | 'right' | 'bottom'
interface Props {
    tag: HTMLElement | null
    gap: number
    side?: SIDE
}

const useIsBorder = ({ tag, gap, side = 'bottom' }: Props ) : [boolean, (side: SIDE) => void] => {
    const [isBorder, setIsBorder] = useState<boolean>(false)
    const check = (side: SIDE) => {
        if (!tag) return
        const lastChild = tag.lastChild as HTMLElement | null
        if (!lastChild) return
        const tagLastChild = tag.getBoundingClientRect()
        const cordinatLastChild = lastChild!.getBoundingClientRect()
        console.log(gap);
        
        if (gap >= tagLastChild[side] - cordinatLastChild[side]) setIsBorder(() => true)
    }

    useEffect(() => {
        setIsBorder(() => false)
        check(side)
    }, [tag])
    return [isBorder, check]
}

export default useIsBorder