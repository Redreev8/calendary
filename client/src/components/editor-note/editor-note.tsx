import { FC } from 'react'
import Editor from '../../UI/editor'
import tools from './tools'
import { ToolText } from '../../UI/text/tool'
import BtnEditorCreate from '../btn-editor-create'
interface EditorNoteProps {}

const EditorNote: FC<EditorNoteProps> = () => {
    const EditorTool = Editor<ToolText>

    return (
        <EditorTool  
            initinalBlocks={[
                {
                    type: 'title-editor-tools',
                    data: {
                        children: '1',
                    },
                    time: 0
                },
                {
                    type: 'text',
                    data: {
                        children: '123321123321',
                    },
                    time: Date.now()
                }
            ]}
            tools={tools}
        >
            <BtnEditorCreate/>
        </EditorTool>
    )
}

export default EditorNote