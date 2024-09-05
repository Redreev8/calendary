const setCursorEditable = (editableElem: HTMLElement, position: number, indexChild: number = 0) => {
    const range = document.createRange()
    const sel = window.getSelection()
    if (!editableElem.childNodes) return
    const child = (editableElem as HTMLElement)?.childNodes[indexChild]
    if (!child) return
    
    if (position > child.textContent!.length) return setCursorEditable(editableElem, position - child.textContent!.length, indexChild + 1)
    if (child.nodeName != '#text') return setCursorEditable((child as HTMLElement), position, 0)
    range.setStart(
        child, 
        position
    )
    range.collapse(true)
  
    sel!.removeAllRanges()
    sel!.addRange(range)

    editableElem?.focus()
}

export default setCursorEditable