import { FC } from 'react'
import Container from '../../UI/container'
import EditorNote from '../../components/editor-note'
import Fieldset from '../../UI/fieldset'
import Editor from '../../UI/editor'
import BtnEditorCreate from '../../components/btn-editor-create'
import InputDateTime from '../../UI/input-date-time'
import Label from '../../UI/label'
import EditorField from '../../components/editor-field'
import toolInputDateTime, { ToolInputDateTime } from '../../UI/input-date-time/tool-input-date-time'

interface NoteEditorProps {}

const NoteEditor: FC<NoteEditorProps> = ({}) => {
    const EditorFieldDateTime  = EditorField<ToolInputDateTime>
    return (
        <Container width='gx' pg={['bg']}>
            <>
                <EditorNote/>
                {/* <Editor
                    tools={{}}
                    wrapp={({ children, ...props }) => <Fieldset legend='Дата и время' { ...props }>{ children }</Fieldset>}
                >
                    <BtnEditorCreate/>
                </Editor> */}
                {/* <Fieldset legend='Time'>
                    <Label label='Дата' isHidenLabel>
                        <InputDateTime/>
                    </Label>
                </Fieldset> */}
                <EditorFieldDateTime
                    wrapp={({ children }) => <Fieldset legend='Time'>{ children }</Fieldset>}
                    initinalBlocks={[
                        {
                            type: 'input-date-time',
                            data: {
                                value: ''
                            },
                            time: 123
                        }
                    ]}
                    tools={ toolInputDateTime }
                />
            </>
            <></>
        </Container>
    )
}

export default NoteEditor