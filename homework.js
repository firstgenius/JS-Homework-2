/* DONT CHANGE THIS CODE - START */
function wait(ms = 1000) { return new Promise(resolve => setTimeout(resolve, ms)) }

class Dish {
    constructor(cookingTime) {
        this.cookingTime = cookingTime;
    }

    async cook() {
        const actualCookingTime = this.cookingTime * (1 + Math.random()) * 100;
        await wait(actualCookingTime);
        return this;
    }
}
/* DONT CHANGE THIS CODE - END */

/*
    YOUR CODE HERE
*/
class Ingridient{

    constructor(ing, count){
        this.ing = ing;
        this.count = count;
    }
}

class Bolognese extends Dish {
    async cook(){
        return super.cook();
    }
    constructor(){
        super(10);
        this.components = [new Ingridient('spaghetti', 1),
                            new Ingridient('meat', 1), 
                             new Ingridient('tomato', 1)]
    }
}

class MashedPotatoes extends Dish {
    async cook(){
        return super.cook();
    }
    constructor(){
        super(8);
        this.components = [new Ingridient('potato', 1)]
    }
}

class Steak extends Dish {
    async cook(){
        return super.cook();
    }
    constructor(){
        super(7);
        this.components = [new Ingridient('meat', 1)]
    }
}

class SteakAndFries extends Dish {
    async cook(){
        return super.cook();
    }
    constructor(){
        super(15);
        this.components = [new Ingridient('potato', 1),
                            new Ingridient('meat', 1)]
    }
}

class Kitchen {
    construct(){
        this.fridgeContent = [];
        this.orders = [];
    }

    addToFridge(components){
        if(this.fridgeContent = []){
            this.fridgeContent = components;
        }
        else{
            for (let index = 0; index < this.components.length; index++){
                this.fridgeContent[this.fridgeContent.length] = this.components[index];
            }
        }
        
    }
    order(dish){
        for(let i=0; i<dish.components.length; i++){
            let ingrid = this.fridgeContent.find(({ing}) => ing === dish.components[i].ing);
            if(ingrid.count < dish.components[i].count){
                throw new Error("Not enough components in fridgeContent")
            }
        }
        for(let i=0; i<dish.components.length; i++){
            let ingrid = this.fridgeContent.find(({ing}) => ing === dish.components[i].ing);
            ingrid.count -= dish.components[i].count;
        }
        if(this.orders = []){
            this.orders = [dish];
        }
        else{
            this.orders.push(dish);
        }
    }

    async cookFastestOrder(){
        if (this.orders.length > 0) {
            let res = this.orders[0];
            let index = 0;
            for (let i = 0; i < this.orders.length; i++) {
                if (res.cookingTime > this.orders[i].cookingTime){
                    res = this.orders[i];
                    index = i;
                }
            }
            this.orders.splice(index, 1)
            return res;
        }
        return null;

    }

    async cookAllOrders() {
        for (let dish of this.orders) {
            dish.cook;
        }
        let cookedDishes = this.orders;
        this.orders = [];
        return cookedDishes;
    }
}

async function test() {
    const kitchen = new Kitchen();
    kitchen.addToFridge([
        new Ingridient('potato', 1),
        new Ingridient('spaghetti', 1),
        new Ingridient('meat', 3),
        new Ingridient('tomato', 2)
    ])

    kitchen.order(new Bolognese()); // Bolognese extends Dish (cookingTime = 10)
    kitchen.order(new MashedPotatoes()); // MashedPotatoes extends Dish (cookingTime = 8)
    kitchen.order(new Steak()); // Steak extends Dish (cookingTime = 7)

    // Feel free to experiment with various dishes and components

    await kitchen.cookFastestOrder(); // Returns res dish to make
    await kitchen.cookAllOrders(); // Returns two dishes in array

    kitchen.order(new SteakAndFries()); // Throws Error: Not enough components in fridgeContent
}

test();
