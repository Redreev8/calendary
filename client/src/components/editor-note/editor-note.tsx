import { forwardRef, LegacyRef } from 'react'
import Editor from '../../UI/editor'
import tools from './tools'
import { ToolText } from '../../UI/text/tool'
import BtnEditorCreate from '../btn-editor-create'
import { block } from '../../UI/editor/type-editor'

const EditorTool = forwardRef(Editor<ToolText>)
const EditorNote = forwardRef(({}, ref) => {
    return (
        <EditorTool  
            ref={ ref as LegacyRef<block<ToolText>[]> }
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
})

export default EditorNote