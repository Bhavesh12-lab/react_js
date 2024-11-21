
// object ==> everything is object => state(variable/propertie) & behaviour (method)
// like example car


// ek new object karne ke liye new keyword ka use karte hei
// let obj = new Object()

// object ka data key aur value ke form mei save hota hei

let person = {

    name: "Bhavesh",
    age: 34,
    email:"bsondagar@gmail.com",
    hobbie:["games","music","dancing","reading"],
    subject:{
        maths:40,
        sci:65,
        eng:85
    }
}

// object andar value ka name change karne ke liye
person.name = "Rathod";

// object ke andar key ya value ko delete karne ke liye
delete person.name;

// object ke andar key aur value ko add karne ke liye
person.nationality ="indian"



console.log(person)
// 1 dot notation 

// console.log(person.name)
// console.log(person.age)
// console.log(person.email)

// object ke andar array ko console karane ke liye '[]' use hota hei
// console.log(person.hobbie[3])

// object ke andar object ko console karane ke liye '.' ka use hota hei
// console.log(person.subject.maths)


// 2 key 

// console.log(person["name"])
// console.log(person["email"])
// console.log(person["hobbie"][3])
// console.log(person["subject"]["sci"])


// obejct Loop

// for(let i in person){
//     console.log(`${i} => ${person[i]}`)
// }

// Array Loop

// for (let arr of person.hobbie){
//     console.log(arr)
// }

