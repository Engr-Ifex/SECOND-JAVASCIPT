
function lifeInWeeksage(age){

    const days = 365;
    const weeks = 52;
    const month = 12;

    const year = 90 - age;

    const monthRemain = year * month;
    const weekRemain = year * weeks;
    const dayRemain = year * days;

    console.log(`You have ${dayRemain} days, ${weekRemain} weeks, ${monthRemain} months`)
}

lifeInWeeksage(30)







function loveCalculator(partner1, partner2) {

    const percentage = Math.floor(Math.random() * 101)

    console.log(`${partner1} and ${partner2} is ${percentage}% compatible`)
}
loveCalculator('', '')