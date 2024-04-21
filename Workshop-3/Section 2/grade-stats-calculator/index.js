try {
    main();
} catch (error) {
    alert(error.message);
}

function main() {
    let grades = prompt('Insert the grades separated by a coma "," and avoid using spaces " ":')
    grades = grades.split(',')

    const castNumArray = (theArray) => {
        let castArray = theArray.map((value) => {
            if (isNaN(Number(value))) {
                throw new Error("One of the inserted values wasn't a number")
            } else {
                return Number(value)
            }
        })
        return castArray
    }

    grades = castNumArray(grades)

    alert(`The average of the inserted grades is: ${grades.reduce((accum, value) => accum + value) / grades.length}\n` +
        `The highest grade is: ${Math.max(...grades)}\n` +
        `The lowest grade is: ${Math.min(...grades)}\n` +
        `Number of approved grades: ${grades.filter((grade) => grade >= 70).length}\n` +
        `Number of failed grades: ${grades.filter((grade) => grade < 70).length}\n` +
        `Ordered grades from highest to lowest:\n${grades.sort((a, b) => b - a)}`)
}