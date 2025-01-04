import "./main.css"


enum Categorys {
    mainFoods,
    appetizer,
    sides,
}

enum MainFoods {
    pizza = "Pizza",
    hamburger = "Hamburger",
    hotdog = "Hot Dog",
}

enum Appetizer {
    salad = "Salad",
    potayto = "Potayto",
}

enum Sides {
    cocacola = "Coca Cola",
    ketchupSauce = "Ketchup Sauce",
}

type FoodType = {
    name: string
    price: number
    category: Categorys
}

const menu: FoodType[] = [
    {
        name: MainFoods.pizza,
        price: 99,
        category: Categorys.mainFoods,
    },
    {
        name: MainFoods.hamburger,
        price: 89,
        category: Categorys.mainFoods,
    },
    {
        name: MainFoods.hotdog,
        price: 79,
        category: Categorys.mainFoods,
    },
    {
        name: Appetizer.potayto,
        price: 49,
        category: Categorys.appetizer,
    },
    {
        name: Appetizer.salad,
        price: 49,
        category: Categorys.appetizer,
    },
    {
        name: Sides.cocacola,
        price: 29,
        category: Categorys.sides,
    },
    {
        name: Sides.ketchupSauce,
        price: 9,
        category: Categorys.sides,
    },
]

const orders: FoodType[] = []

const addNewOrder = (newOrders: FoodType): void => {
    orders.push(newOrders)
}

const totalPriceCalculator = (): number => {
    let total_price = 0

    for (const item of orders) {
        total_price += item.price
    }

    return total_price
}

const displayMenu = (): void => {
    console.log("Menu :")

    for (const item of menu) {
        console.log(`  ${item.name} Price: ${item.price}`)
    }
}

const displayOrders = (): void => {
    console.log("\nYour Orders :")

    for (const item of orders) {
        console.log(`  ${item.name} Price: ${item.price}`)
    }
}

displayMenu()

addNewOrder(menu[0])
addNewOrder(menu[6])
addNewOrder(menu[3])

displayOrders()

console.log(`\n \nTotal Price ${totalPriceCalculator()}`)
