import { createContext } from 'react'
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

const Editor = <T extends Tools>({ className, initinalBlocks, tools, initinalDefaultBlocks, children }: EditorProps<T>) => {
    const cl = classNames(style.editor, className)
    const { 
        blocks, 
        setBlocks,
        isMounted, 
        setDefaultBlocks, 
        addBlock,
        removeBlock
    } = useEditor({ initinalBlocks, tools, initinalDefaultBlocks })
    return (
        <div className={ cl }>
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
                <div className={ style['editor__wrapp'] }>            
                    {
                        blocks!.map(el => {
                            const Conpmonent = tools[el.type].render
                            return  <Conpmonent { ...el } key={ el.time }></Conpmonent>
                        })
                    }
                </div>
                { children }
            </EditorContext.Provider>
        </div>
    )
}

export default Editor