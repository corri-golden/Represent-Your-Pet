console.log("yo")

// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const myPets = {
    name: "Dori",
    species: "cat",
    Nicknames: ["ugh", "What now", "Dorita"],
    age: 3,

}

console.log(myPets, "myPets")


// PET SOUNDS
// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior. For example:

const myPet = {
    name: "Dori",
    species: "cat",
    Nicknames: ["ugh", "What now", "Dorita"],
    age: 3,
    purr: function(){
        window.alert("grrr")
    },
    meow: function(){
        window.alert("meow")
    },
    lick: function(){
        window.alert("scratch")
    }
}





myPet.favoriteToys = []

// console.log(myPet, "myPet")
// 2. Now define another new key named play whose value is a function with a single parameter named toy.

myPet.play = function (toy) {
    let toys = toy.toLowerCase()
    if (toys.includes("cardboard")) {
        myPet.favoriteToys.push(toy)
    } 
    console.log(this.favoriteToys)
}

myPet.play("cardboard box")

// console.log(myPet, "myPet")
// 3. The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).



// myPet.purr()
// myPet.meow()
// myPet.lick()


// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    orders: [],
    getOrders: function () {
        console.log(this.orders)
    }
}

const burgerComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "Small"

}

const fishburgerComboMeal = {
    sandwichType: "beef",
    fries: true,
    drinkSize: "Medium"

} 


// // // Place an order
restaurant.placeOrder(burgerComboMeal)
restaurant.placeOrder(fishburgerComboMeal)
console.log(restaurant.placeOrder, "placeOrder")

// // // Invoke the function to return the list of all orders

// restaurant.getOrders()

// // // Output all orders to the console using console.table()
console.table(restaurant.orders)















// const restaurant = {
//     name: "Bob's Burgers",
//     placeOrder: function (meal) {
//        this.orders.push(meal)
//     },
//     orders: [],
//     getOrders: function () {
//         console.log(this.orders)
//     }

// }


// const chickenComboMeal = {
//     sandwichType: "Chicken Sandwitch",
//     fries: true,
//     drinkSize: "Medium"
// }

// const cheeseburgerComboMeal = {
//     sandwichType: "Double Cheeseburger",
//     fries: false,
//     drinkSize: "Large"
// }

// Place an order
// restaurant.placeOrder(chickenComboMeal)
// restaurant.placeOrder(cheeseburgerComboMeal)
// console.log(restaurant.placeOrder)


// Invoke the function to return the list of all orders
restaurant.getOrders()

// Output all orders to the console using console.table()
// console.table(restaurant.orders)