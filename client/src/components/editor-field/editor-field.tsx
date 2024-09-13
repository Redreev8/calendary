import Editor from '../../UI/editor'
import BtnEditorCreate from '../btn-editor-create'
import { block, EditorProps, Tools } from '../../UI/editor/type-editor'
import Fieldset from '../../UI/fieldset'
import style from './editor-field.module.scss'
import { ForwardedRef, forwardRef, ReactNode } from 'react'
interface EditorFieldProps {
    tools: Tools
    initinalBlocks: EditorProps<Tools>['initinalBlocks']
}

const EditorField = <T extends Tools>({ tools, initinalBlocks }: EditorFieldProps, ref: ForwardedRef<block<T>[]>) => {
    const EditorTool = forwardRef(Editor<T>)
    return (
        <EditorTool
            ref={ ref }
            wrapp={({ children }: { children: ReactNode }) => <Fieldset className={ style['fieldset'] } legend='Time'>{ children }</Fieldset>}
            initinalBlocks={initinalBlocks as EditorProps<T>['initinalBlocks']}
            tools={tools as T}
        >
            <BtnEditorCreate/>
        </EditorTool>
    )
}

export default EditorField