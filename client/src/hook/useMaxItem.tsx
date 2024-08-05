'use client'
import { useEffect, useState } from 'react'

export type UseMaxItemReturn<T = JSX.Element> = { 
    itemsActive: T[]
    push: (r: T) => void, 
    remove: (r: T) => void
}

const useMaxItem = <T = JSX.Element>(max: number = 1) : UseMaxItemReturn<T> => {
    const [items, setItems] = useState<T[]>([])
    if (max === 0) return { itemsActive: [], push: () => {}, remove: () => {} }
    const push = (r: T) => {
        if (max === 0) return
        setItems(prev => [...prev, r])
        if (items.length >= max) remove(items[items.length - 1])
    }
    const remove = (r: T) => {
        setItems(prev => prev.filter(el => el !== r))
    }
    return { itemsActive: items, push, remove }
}

export default useMaxItem