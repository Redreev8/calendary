import { ChangeEvent, forwardRef, useState } from 'react'
import style from './dropzone-imgs.module.scss'
import DropZone from '../../UI/drop-zone'
import dropFileImgs, { IMG } from '../../helper/drop-file-imgs'
interface DropzoneImgsProps {}

const DropzoneImgs = forwardRef<any, DropzoneImgsProps>(({}, ref) => {
    const [imgs, setImgs] = useState<IMG[]>([])
    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        dropFileImgs(e, img => setImgs(prev => [{ ...img }, ...prev]))
    }
    return (
        <DropZone onChange={handelChange} ref={ ref }>
            {
                imgs.map(img => <img className={ style.img } { ...img } key={img.src}/>)
            }
        </DropZone>
    )
})

export default DropzoneImgs