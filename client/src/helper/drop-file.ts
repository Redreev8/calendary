import { ChangeEvent } from 'react'

export default (e: ChangeEvent<HTMLInputElement>, cb: (fr: FileReader) => void) => {
    const tgt = e.target
    const files = tgt.files
    if (!files) return
    for (let i = 0; i < files.length; i++) {
        const fr = new FileReader()
        fr.addEventListener('load', () => cb(fr))
        fr.readAsDataURL(files[i])
    }
}