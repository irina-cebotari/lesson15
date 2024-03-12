// const dima = {
//     name: 'Dima',
//     age: 27,
//     post: 'DBA',
//     sector: 'Posta Veche'
// }

// class DBA {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.sector = options.sector
//         this.post = 'DBA'
//     }

//     responsibility() {
//         console.log('to administrate the DB')
//     }
// }

// const alexei = new DBA({ name: 'Alexei', age: 29, sector: 'Telecentru' })

// // console.log(dima)
// // console.log(alexei)

// // alexei.responsibility()

// class DBAManager extends DBA {
//     constructor(options) {
//         super(options)
//         this.post = 'DBA Manager'
//         this.experience = options.experience
//     }

//     responsibility() {
//         super.responsibility()
//         console.log('to manage DBAs')
//     }

//     get experienceInfo() {
//         return console.log("Experienta de lucru a lui " + this.name + " este de:" + this.experience)
//     }

//     set experienceInfo(newValue) {
//         this.experience = newValue
//     }
// }

// const igor = new DBAManager({ name: 'Igor', age: 45, sector: 'Botanica', experience: 15})

// console.log(igor)

// igor.responsibility()

// igor.experienceInfo

// igor.experienceInfo = 16

// igor.experienceInfo


// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.food = options.food
//         this.type = 'Animal'
//     }

// }

// class Cat extends Animal {
//     constructor(options) {
//         super(options)
//     }

//     activities() {
//         console.log('stay in home')
//     }
// }

// class Dog extends Animal {
//     constructor(options) {
//         super(options)
//     }

//     activities() {
//         console.log('stay out home')
//     }
// }

// const charlie = new Dog({ name: 'Charlie', age: 6, food: 'Dried food' })
// const bibi = new Cat({ name: 'Bibi', age: 5, food: 'Meat' })

// console.log(charlie, bibi)

// bibi.activities()
// charlie.activities()


// const dima = {
//     name: 'Dima',
//     age: 27,
//     post: 'DBA',
// }

// const {name, age, post} = dima

// console.log(dima)
// console.log(name)
// console.log(age)
// console.log(post)


// class DBA {
//     constructor({name, age, sector}) {
//         this.name = name
//         this.age = age
//         this.sector = sector
//         this.post = 'DBA'
//     }

//     responsibility() {
//         console.log('to administrate the DB')
//     }
// }

// const alexei = new DBA({ name: 'Alexei', age: 29, sector: 'Telecentru' })

// console.log(alexei)



// const func = (obj) => {
//     console.log(`Name is ${obj.name} and age is ${obj.age}`)
// }

// func({name: 'Pavel', age: 34})



// const func = ({age, name}) => {
//     console.log(`Name is ${name} and age is ${age}`)
// }

// func({ name: 'Pavel', age: 34 })


// const str = 'str'

// function func() {
//     var str1 = 'str1'
//     console.log(str)

//     function func1() {
//         var str3 = 'str3'
//         console.log(str1, str3, str)
//     }

    // console.log(str3)

//     return func1
// }

// console.log(str1)
// func()

// const func1 = func()

// func1()

// const condition = true

// if (condition) {
//     var str2 = 'str2'
// }

// console.log(str2)



const time = 15000

// 1week 5days 
// 4days 10hours
// 7hours 50minutes
// less than an hour 

const week = 10080
const day = 1440



const timeFormat = (remainedTime) => {
    if(remainedTime/week >= 1 ) {
        const weekMark = Math.floor(remainedTime/week) !== 1 ? 'weeks' : 'week'
        const dayMark = remainedTime/week > 1 ? 'days' : 'day'
    return `${Math.floor(remainedTime/week)} ${weekMark} ${Math.floor((remainedTime%week)/day)}${dayMark}`
    }
}

console.log(timeFormat(time))