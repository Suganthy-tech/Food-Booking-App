import { card, order } from "../model/card.modal";

export const cardList: card[] = [{
    name: 'Dosa',
    type: 'Vegeterian',
    cuisine: 'South Indian',
    Availability: ['BreakFast', 'Lunch'],
    price: 50,
    currency: 'INR',
    favorite: true

}, {
    name: 'Idly',
    type: 'Vegeterian',
    cuisine: 'South Indian',
    Availability: ['BreakFast', 'Lunch'],
    price: 50,
    currency: 'INR',
    favorite: true

},
{
    name: 'Pongal',
    type: 'Vegeterian',
    cuisine: 'South Indian',
    Availability: ['BreakFast', 'Lunch'],
    price: 50,
    currency: 'INR',
    favorite: true

},
{
    name: 'Upma',
    type: 'Vegeterian',
    cuisine: 'South Indian',
    Availability: ['BreakFast', 'Lunch'],
    price: 40,
    currency: 'INR',
    favorite: true

}, {
    name: 'Uthapam',
    type: 'Vegeterian',
    cuisine: 'South Indian',
    Availability: ['BreakFast', 'Lunch'],
    price: 80,
    currency: 'INR',
    favorite: true

},
{
    name: 'Ghee Roast',
    type: 'Vegeterian',
    cuisine: 'South Indian',
    Availability: ['BreakFast', 'Lunch'],
    price: 80,
    currency: 'INR',
    favorite: true

},
{
    name: 'Paper Roast',
    type: 'Vegeterian',
    cuisine: 'South Indian',
    Availability: ['BreakFast', 'Lunch'],
    price: 80,
    currency: 'INR',
    favorite: true

},
{
    name: 'Podi Idly Roast',
    type: 'Vegeterian',
    cuisine: 'South Indian',
    Availability: ['BreakFast', 'Lunch'],
    price: 80,
    currency: 'INR',
    favorite: true

},
{
    name: 'Mutton ghee roast',
    type: 'Non-Vegeterian',
    cuisine: 'South Indian',
    Availability: ['BreakFast', 'Lunch'],
    price: 80,
    currency: 'INR',
    favorite: true

},
{
    name: 'Chappathi',
    type: 'Vegeterian',
    cuisine: 'North Indian',
    Availability: ['BreakFast', 'Lunch'],
    price: 40,
    currency: 'INR',
    favorite: false
},
{
    name: 'Pepper Chicken',
    type: 'Non-Vegeterian',
    cuisine: 'South Indian',
    Availability: ['BreakFast', 'Lunch', 'Dinner'],
    price: 100,
    currency: 'INR',
    favorite: true
},
{
    name: 'Paneer Butter Masala',
    type: 'Vegeterian',
    cuisine: 'North Indian',
    Availability: ['BreakFast', 'Dinner'],
    price: 150,
    currency: 'INR',
    favorite: false
},
{
    name: 'Tandoor BBQ',
    type: 'Non-Vegeterian',
    cuisine: 'North Indian',
    Availability: ['Lunch', 'Dinner'],
    price: 225,
    currency: 'INR',
    favorite: false
},
{
    name: 'Mutton Tikka',
    type: 'Non-Vegeterian',
    cuisine: 'North Indian',
    Availability: ['Lunch', 'Dinner'],
    price: 225,
    currency: 'INR',
    favorite: false
},
{
    name: 'Pepper BBQ',
    type: 'Non-Vegeterian',
    cuisine: 'North Indian',
    Availability: ['BreakFast', 'Lunch', 'Dinner'],
    price: 225,
    currency: 'INR',
    favorite: true
}]

export const orderList: order[] = [
    {
        items: cardList,
        currency: 'INR',
        orderDate: '1-2-1201',
        orderTime: '98-',
        Amount: 908,
        custContactNumber: "9089878790",
        customerName: 'Swetha',
        expand: false

    },
    {
        items: cardList,
        currency: 'INR',
        orderDate: '1-2-1201',
        orderTime: '98-',
        Amount: 908,
        custContactNumber: "908987879",
        customerName: 'Swetha1'
        ,
        expand: false

    },
    {
        items: cardList,
        currency: 'INR',
        orderDate: '1-2-1201',
        orderTime: '98-',
        Amount: 908,
        custContactNumber: "908987879",
        customerName: 'Swetha2',
        expand: false


    },
    {
        items: cardList,
        currency: 'INR',
        orderDate: '1-2-1201',
        orderTime: '98-',
        Amount: 908,
        custContactNumber: "908987879",
        customerName: 'Swetha3',
        expand: false


    },
    {
        items: cardList,
        currency: 'INR',
        orderDate: '1-2-1201',
        orderTime: '98-',
        Amount: 908,
        custContactNumber: "908987879",
        customerName: 'Swetha4',
        expand: false


    }, {
        items: cardList,
        currency: 'INR',
        orderDate: '1-2-1201',
        orderTime: '98-',
        Amount: 908,
        custContactNumber: "9089878790",
        customerName: 'Swetha',
        expand: false


    },
    {
        items: cardList,
        currency: 'INR',
        orderDate: '1-2-1201',
        orderTime: '98-',
        Amount: 908,
        custContactNumber: "908987879",
        customerName: 'Swetha1',
        expand: false


    },
    {
        items: cardList,
        currency: 'INR',
        orderDate: '1-2-1201',
        orderTime: '98-',
        Amount: 908,
        custContactNumber: "908987879",
        customerName: 'Swetha2',
        expand: false


    },
    {
        items: cardList,
        currency: 'INR',
        orderDate: '1-2-1201',
        orderTime: '98-9-9',
        Amount: 908,
        custContactNumber: "908987879",
        customerName: 'Swetha3',
        expand: false


    },
    {
        items: cardList,
        currency: 'INR',
        orderDate: '1-2-1201',
        orderTime: '98-',
        Amount: 908,
        custContactNumber: "908987879",
        customerName: 'Swetha4',
        expand: true


    }
];
