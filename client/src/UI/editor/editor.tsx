import { createContext, FC, ForwardedRef, useEffect } from 'react'
import style from './editor.module.scss'
import { block, EditorContenxt, EditorProps, Tools } from './type-editor'
import classNames from 'classnames'
import useEditor from './useEditor'


export const EditorContext = createContext<any>({
    blocks: [],
    setBlocks: undefined,
    setDefaultBlocks: undefined,
    tools: {},
    isMounted: false,
    addBlock: () => {},
    changeBlock: () => {}
})
const DefualtWrapp: FC<any> = ({ children, ...prosp}) => <div { ...prosp }>{ children }</div>
const Editor = <T extends Tools>(
    { wrapp, className, initinalBlocks, tools, initinalDefaultBlocks, children }: EditorProps<T>,
    ref: ForwardedRef<block<T>[]>
) => {
    const cl = classNames(style.editor, className)
    const Wrapp: FC<any> = wrapp ? wrapp : DefualtWrapp
    const { 
        blocks, 
        setBlocks,
        isMounted, 
        setDefaultBlocks, 
        addBlock,
        changeBlock,
        removeBlock
    } = useEditor({ initinalBlocks, tools, initinalDefaultBlocks })
    useEffect(() => {
        if (ref) {
            if (typeof ref === 'function') {
                ref(blocks)
            }
            if (typeof ref === 'object') {
                ref.current = blocks
            }
        }
    }, [])
    return (
        <EditorContext.Provider 
            value={{ 
                blocks, 
                setBlocks, 
                tools, 
                isMounted, 
                setDefaultBlocks, 
                addBlock,
                changeBlock,
                removeBlock
            } as EditorContenxt<T>}
        >
            <Wrapp className={ cl }>            
                {
                    blocks!.map(el => {
                        const Conpmonent = tools[el.type].render
                        return  <Conpmonent { ...el } key={ el.time }></Conpmonent>
                    })
                }
            </Wrapp>
            { children }
        </EditorContext.Provider>
    )
}

export default Editor