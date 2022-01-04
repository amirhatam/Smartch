// une liste de n entiers positifs uniques aléatoires, 
//on veut trouver un couple (deux éléments) dont la somme égale 110 un entier donné








// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const numbers = [10, 20, 14, 17, 23, 25, 35, 54, 49, 70, 30, 44, 39, 13, 77, 22, 56]
let numberFind = []

numbers.filter(e => {
    for (var i = 0; i < numbers.length; i++) {
        const num = numbers[i]

        if (e + num === 110) {
            // console.log("The Numbers ", e, " and ", num, "are equal to 110");
            return numberFind = [e, num]
        }
    }


})
console.log("numberFind", numberFind);













// const nums = [10, 20, 14, 17, 23, 25, 35, 49, 70, 30, 44, 39, 13, 77, 22, 54, 56]

// console.log(nums);

// nums.map((e) => {

//     console.log("e", e);

// })

// nums.filter(elem => {


// })

// for (var i = 0; i < nums.length; i++) {
//     console.log("elem", nums.indexOf[0]);


// }