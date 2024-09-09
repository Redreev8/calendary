import { createContext, FC } from 'react'
import style from './editor.module.scss'
import { EditorContenxt, EditorProps, Tools } from './type-editor'
import classNames from 'classnames'
import useEditor from './useEditor'


export const EditorContext = createContext<any>({
    blocks: [],
    setBlocks: undefined,
    setDefaultBlocks: undefined,
    tools: {},
    isMounted: false,
    addBlock: () => {}
})
const DefualtWrapp: FC<any> = ({ children, ...prosp}) => <div { ...prosp }>{ children }</div>
const Editor = <T extends Tools>({ wrapp, className, initinalBlocks, tools, initinalDefaultBlocks, children }: EditorProps<T>) => {
    const cl = classNames(style.editor, className)
    const Wrapp: FC<any> = wrapp ? wrapp : DefualtWrapp
    const { 
        blocks, 
        setBlocks,
        isMounted, 
        setDefaultBlocks, 
        addBlock,
        removeBlock
    } = useEditor({ initinalBlocks, tools, initinalDefaultBlocks })
    
    return (
        <EditorContext.Provider 
            value={{ 
                blocks, 
                setBlocks, 
                tools, 
                isMounted, 
                setDefaultBlocks, 
                addBlock,
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