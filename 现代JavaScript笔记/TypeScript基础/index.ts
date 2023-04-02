// boolean  ->  boolean
// number ->  number
// string -> string

let age: number = 34
let lastName: string = "red"
let isBusy: boolean = false;

// Object types
const you : { 
    firstName: string;
    lastName: string;
    isReturning: boolean; 
    age: number;
    // stayedAt: Array<string | number>,
    stayedAt: string[];
} = {
    firstName: 'Dick',
    lastName: 'Ass',
    isReturning: true,
    age: 23,
    // Array types
    stayedAt: ['home', 'school']
}


console.log(you);

let stayedAt: string[];
stayedAt = ['home'];

let properties: {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    },
    contact: string[];
    isAvailable: boolean;
}[] = [
    {
        image: '',
        title: 'Chack',
        price: 45,
        location: {
            firstLine: 'Shack 49',
            city: 'Vodga',
            code: 1214,
            country: 'Columbia'
        },
        contact:[ "dickAss@gmail.com", "123235346"],
        isAvailable: false
    }
]


// DOM 交互
const propertyContainer = document.querySelector('.properties');

for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
}

// Tuple types
const contactDetail: [string, number] = ["asf@sdf.com", 12435346];


// Enum
enum UserPermissions {
    ADMIN,
    READ_ONLY
}

enum LoyaltyLevel {
    GOLD,
    SILVER,
    BRONZE
}

// Union types
function add(firstValue : (number | string), secondValue: (number | string)) {
    return firstValue + ' ' + secondValue;
}


// Type alias
type Price = 10 | 20 | 30;
let price: Price = 10;

type Country = "America" | "China" | "Japan";
let country: Country = "America";