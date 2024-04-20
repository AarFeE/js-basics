while (true) {
    let grades = prompt("Insert your grades, separated by ',' and no spaces ' ':")
    let flag = true

    grades.forEach(grade => {
        grade = Number(grade)
    })



    grades = grades.split(",")
    let gradesAvg = grades.reduce((accum, value) => {
        return accum + value
    }, 0)

    alert(gradesAvg)
}

