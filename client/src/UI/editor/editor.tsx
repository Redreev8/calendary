import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from 'react'
import style from './editor.module.scss'
import classNames from 'classnames'

export type RenderProps = {
    data: {
        [key: string]: any
    },
    props: {
        [key: string]: any
    },
    key: string | number
}

export type EventToolRender = {
    onChange: (data: any) => void
}

export type Tools = {
    [key: string]: {
        data: {
            [key: string]: any
        }
        render: (props: any, event: EventToolRender) => ReactNode 
    }
} 
type block<T extends Tools> = {
    type: keyof T
    props: {
        [key: string]: any
    },
    data: T[keyof T]['data']
    key: string | number
}

export interface EditorProps<T extends Tools> {
    blocks: block<T>[]
    setBlocks?: Dispatch<SetStateAction<block<T>[]>>
    isRender?: boolean
    tools: T
    className?: string
}

const Editor = <T extends Tools>({ className, blocks, setBlocks, tools }: EditorProps<T>) => {
    const cl = classNames(style.editor, className)
    const handelChange = <D extends T[keyof T]['data'] >(i: number, data: D) => {
        
        if (!setBlocks) return 
        setBlocks(prev => prev.map((el, index) => {
            if (index !== i) return el

            el.data = data
            return el
        }))
    }
    return (
        <div className={ cl }>
            <div className={ style['editor__wrapp'] }>
                {
                    blocks!.map((el, i) => (
                        tools[el.type].render(el, { 
                            onChange: (data: T[typeof el.type]['data']) => handelChange<T[typeof el.type]['data']>(i, data) 
                        }))
                    )
                }
            </div>
        </div>
    )
}

export default Editor