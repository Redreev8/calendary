import { ChangeEvent } from "react"
import dropFile from "./drop-file"

export interface IMG {
    src: string, 
    width: number, 
    height: number
    alt: string
}

export default (e: ChangeEvent<HTMLInputElement>, cb: (img: IMG) => void) => {
    dropFile(e, (fr: FileReader) => {
        const img = new Image()
        img.addEventListener('load', function() {
            cb({
                src: this.src as string, 
                width: this.width as number, 
                height: this.height as number,
                alt: '' as string,
            })
        })
        if (typeof fr.result === 'string') img.src= fr.result
    })
}