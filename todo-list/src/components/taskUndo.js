const taskUndo = (parent, child) => {
    let index = 0, counter = Object.keys(child).length - 1, result = 0
    Object.keys(child).map(input => {
        index++
        if (child[input].completedS === 0 && counter > -1) {
            counter -= 1
        }
    })
    result = counter / index
    console.log("new result ", result)
    return result
}

export default taskUndo