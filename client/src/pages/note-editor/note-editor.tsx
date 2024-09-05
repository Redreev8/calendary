import { FC } from 'react'
import Container from '../../UI/container'
import Editor from '../../UI/editor'
import tools from './tools'
import { ToolText } from '../../UI/text/tool'

interface NoteEditorProps {}

const NoteEditor: FC<NoteEditorProps> = ({}) => {
    const EditorTool = Editor<ToolText>

    return (
        <Container >
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

            </EditorTool>
        </Container>
    )
}

export default NoteEditor