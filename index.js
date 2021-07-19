// const items = [
//     { name: "Rice", price: 5 },
//     { name: "Book", price: 20 },
//     { name: "Chicken", price: 10 },
//     { name: "Monitor", price: 100 },
// ]
//the accumuator is 'total', it could be called anything, but it's what we are going to call what this adds up to
// the second parameter is the item, this is just a varaibale for each object in the array we are passing in, we call it item, because it is convention to call it the singular of the array that hold many 

//if the array were named cheeseburgers, we would call the parameter cheeseburger (singular), by convention. But really, it could be called anything

// const totalPrice = items.reduce((accumulator, object) => {
//     // console.log(`Total: ${total}`)
//     // console.log(`Item: ${item.price}`)
//     console.log(`Testing variables: ${object.price}`)
//     return accumulator + object.price
// }, 0)
// let totalPrice = 0
// items.forEach(item => {
//     totalPrice += item.price
//     console.log(item.name, item.price)
// })

// console.log(totalPrice, 'total price')

// const courses = [
//     {name: 'WDS', price: 185 },
//     {name: 'Learn JavaScript', price: 75 },
//     {name: 'Coding With Mosh', price: 20 },
//     {name: 'Angela Yu Webdev Bootcamp', price: 12 },
// ]

// let totalCost = 0
// courses.forEach(course => {
//     totalCost += course.price
//     console.log(course.name, course.price)
// })

// console.log(totalCost, 'Courses Total Cost')

const team = [
    { name: 'Jeremiah', age: 26 },
    { name: 'Joaquin', age: 31 },
    { name: 'Shavonne', age: 42 },
    { name: 'Celeste', age: 42 },
    { name: 'Jimmy Dean', age: 26 },
    { name: 'Lisa', age: 61 },
    { name: 'Juliette', age: 31 },

]
const result = team.reduce((groupedTeam, person) => {
    const age = person.age
    console.log(person.name, person.age)
    if(groupedTeam[age] == null) groupedTeam[age] = []
    groupedTeam[age].push(person)
    return groupedTeam
    
}, {})

console.log(result)

const bankAccount = [200, 25, 300, 50, 150]

const bankBalance = bankAccount.reduce((total, deposit) => {
    console.log(deposit)
    return total +=  deposit
})

console.log(bankBalance)