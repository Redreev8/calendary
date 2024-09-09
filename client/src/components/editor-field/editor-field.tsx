import Editor from '../../UI/editor'
import BtnEditorCreate from '../btn-editor-create'
import { EditorProps, Tools } from '../../UI/editor/type-editor'
interface EditorFieldProps {
    tools: Tools
    initinalBlocks: EditorProps<Tools>['initinalBlocks']
    wrapp: EditorProps<Tools>['wrapp']
}

const EditorField = <T extends Tools>({ wrapp, tools, initinalBlocks }: EditorFieldProps) => {
    const EditorTool = Editor<T>
    return (
        <EditorTool
            wrapp={ wrapp }
            initinalBlocks={initinalBlocks as EditorProps<T>['initinalBlocks']}
            tools={tools as T}
        >
            <BtnEditorCreate/>
        </EditorTool>
    )
}

export default EditorField