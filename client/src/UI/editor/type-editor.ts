import { Dispatch, ReactNode, SetStateAction } from 'react'

export type RenderProps = {
    data: {
        [key: string]: any
    },
    props: {
        [key: string]: any
    },
    time: number
}

export type Event = {
    onChange: (data: any) => void
    setBlocks: Dispatch<SetStateAction<block<any>[]>> | undefined
}

export type Tools = {
    [key: string]: {
        data: {
            [key: string]: any
        }
        render: (props: any) => ReactNode 
    }
} 
export type block<T extends Tools> = {
    type: keyof T
    data: T[keyof T]['data']
    time: number
}

export interface EditorProps<T extends Tools> {
    initinalBlocks?: block<T>[] | []
    initinalDefaultBlocks?: keyof T
    tools: T
    className?: string
    children: ReactNode
}

export interface EditorContenxt<T extends Tools = Tools> extends  Pick<EditorProps<T>, 'tools'> {
    blocks: block<T>[]
    setBlocks?: Dispatch<SetStateAction<block<T>[]>>
    setDefaultBlocks?: SetStateAction<keyof T>
    isMounted: boolean
    addBlock: (time: keyof T) => void
    removeBlock: (time: keyof T) => void
}
