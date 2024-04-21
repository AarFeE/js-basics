while (true) {
    let grades = prompt("Insert your grades, separated by ',' and no spaces ' ':")
    let flag = true

    grades = grades.split(',')

    for (i in grades) {
        grades[i] = Number(grades[i])
        if (isNaN(grades[i])) {
            alert("One of the inserted values wasn't a number")
            flag = false
        }
    }

    if (!flag) {
        break
    }

    const getAverage = grades.reduce((accum, value) => {
        return accum + value
    }, 0)

    alert(`Average of the inserted grades: ${(getAverage / grades.length).toFixed(2)}`)
    break
}