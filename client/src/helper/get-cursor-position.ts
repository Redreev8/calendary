const getCursorPosition = (tag: Node) => {
    let selection = document.getSelection()
    let range = new Range
    range.setStart(tag, 0)
    range.setEnd(selection!.anchorNode!, selection!.anchorOffset)
    return range.toString().length
}

export default getCursorPosition