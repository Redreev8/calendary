import { FC, forwardRef, useRef } from 'react'
import Container from '../../UI/container'
import EditorNote from '../../components/editor-note'
import EditorField from '../../components/editor-field'
import DropzoneImgs from '../../components/dropzone-imgs'
import toolInputDateTimeInteval, { ToolInputDateTimeInteval } from '../../components/tool-input-date-time-interval/tool-input-date-time-interval'
import { block } from '../../UI/editor/type-editor'
interface NoteEditorProps {}

const EditorFieldDateTime = forwardRef(EditorField<ToolInputDateTimeInteval>)
const NoteEditor: FC<NoteEditorProps> = ({}) => {
    const refContent = useRef()
    const refDateTime = useRef<block<ToolInputDateTimeInteval>[]>([])
    const refImgs = useRef()
    return (
        <Container width='gx' pg={['bg']}>
            <>
                <EditorNote ref={ refContent } />
                <EditorFieldDateTime
                    ref={ refDateTime }
                    initinalBlocks={[
                        {
                            type: 'input-date-time-inteval',
                            data: {
                                date: '',
                                inteval: '',
                            },
                            time: 123
                        }
                    ]}
                    tools={ toolInputDateTimeInteval }
                />
            </>
            <DropzoneImgs ref={ refImgs } />
        </Container>
    )
}

export default NoteEditor