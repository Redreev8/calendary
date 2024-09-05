import { FC } from 'react'
import Container from '../../UI/container'
import Editor from '../../UI/editor'
import tools from './tools'
import { ToolText } from '../../UI/text/tool'
import BtnEditorCreate from '../../components/btn-editor-create'

interface NoteEditorProps {}

const NoteEditor: FC<NoteEditorProps> = ({}) => {
    const EditorTool = Editor<ToolText>

    return (
        <Container width='gx'>
            <EditorTool  
                initinalBlocks={ [{
                    type: 'text',
                    data: {
                        children: '123321123321',
                    },
                    time: Date.now()
                }] }
                tools={tools}
            >
                <BtnEditorCreate/>
            </EditorTool>
            <></>
        </Container>
    )
}

export default NoteEditor