import { ReactNode } from 'react'
import { RenderProps, Tools } from '../../UI/editor/type-editor'
import { ToolTextData } from '../../UI/text/tool'
import Title from '../../UI/title'
import useTitleEditorTools from './useTitleEditorTools'
export interface TitleEditorToolsData extends RenderProps {
	data: {
		children: ReactNode
	}
}

export interface TitleEditorTools extends Tools {
	'title-editor-tools': {
		data: TitleEditorToolsData['data'],
        render: (props: TitleEditorToolsData) => ReactNode 
	},
}
const TitleEditorTools: TitleEditorTools = {
    'title-editor-tools': {
        data: {
            children: ' ',
        },
        render: ({ data, time }) => {
            const {
                ref,
                handelChange,
                handelKeyDownBlock,
            } = useTitleEditorTools({ data, time } as ToolTextData)
            return (
                <Title
                    levelTag={1}
                    level={3}
                    ref={ ref }
                    onKeyDown={ handelKeyDownBlock }
                    onInput={ handelChange } 
                    suppressContentEditableWarning={true}
                    contentEditable='true'
                >
                    { data.children }
                </Title>
            )
        }
    }
}

export default TitleEditorTools