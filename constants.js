// constants.js
const restaurantDetails = {
    name: "کوئٹہ قبائل ریسٹورنٹ",
    address: "مسلم ٹاؤن، لاہور، پنجاب",
    phone: "0313 8300086",
};

const restaurantDetails1 = {
    name: "Butt Karahi",
    address: "Gulberg 3, Lahore, Pakistan",
    phone: "0301 1234567",
};

const restaurantDetails2 = {
    name: "لذیذ فوڈ پوائنٹ",
    address: "جوہر ٹاؤن، لاہور، پنجاب",
    phone: "0321 7654321",
};

const restaurantDetails3 = {
    name: "ذائقہ ریسٹورنٹ",
    address: "گلبرگ مین بلیوارڈ، لاہور، پنجاب",
    phone: "0302 9876543",
};


// Bill Items for Restaurant 1
const billItems = [
    { name: "Chicken Makhni Karahi", quantity: 1.5, price: 2000, total: 3000 },
    { name: "Roti Per Head", quantity: 3, price: 150, total: 450 },
    { name: "Raita", quantity: 3, price: 100, total: 300 },
    { name: "Salad", quantity: 1, price: 120, total: 120 },
    { name: "Soft Drinks", quantity: 4, price: 50, total: 200 },
];

// Bill Items for Restaurant 2 (different dishes)
const billItems1 = [
    { name: "Mutton Handi", quantity: 1, price: 2800, total: 2800 },
    { name: "Tandoori Roti", quantity: 10, price: 40, total: 400 },
    { name: "Mint Raita", quantity: 2, price: 100, total: 200 },
    { name: "Green Salad", quantity: 1, price: 150, total: 150 },
    { name: "Lassi", quantity: 5, price: 120, total: 600 },
];

// Bill Items for Restaurant 3 (even more variety)
const billItems2 = [
    { name: "Beef Biryani", quantity: 1.5, price: 2000, total: 3000 },
    { name: "Tandoori Naan", quantity: 8, price: 100, total: 800 },
    { name: "Chicken Seekh Kebab", quantity: 6, price: 180, total: 1080 },
    { name: "Chutney", quantity: 1, price: 100, total: 100 },
    { name: "Soda", quantity: 3, price: 50, total: 150 },
];

const billItems4 = [
    { name: "Mutton Karahi", quantity: 1, price: 2500, total: 2500 },
    { name: "Garlic Naan", quantity: 4, price: 150, total: 600 },
    { name: "Grilled Fish", quantity: 2, price: 1200, total: 2400 },
    { name: "Raita", quantity: 1, price: 150, total: 150 },
    { name: "Soft Drink", quantity: 3, price: 150, total: 450 },
    { name: "Gulab Jamun", quantity: 4, price: 225, total: 900 },
];


const calculateTotal = () => {
    return billItems4.reduce((total, item) => total + item.price, 0).toFixed(2);
};

const bill = {
    restaurant: restaurantDetails,
    items: billItems,
    total: calculateTotal(),
    date: new Date("2024-08-08T14:30:00").toLocaleDateString(),
    time: new Date("2024-08-08T14:30:00").toLocaleTimeString(),
    customer: "John Doe",  // Example customer name
    
};
const bill1 = {
    restaurant: restaurantDetails1,
    items: billItems,
    total: calculateTotal(),
    date: new Date("2024-10-08T14:30:00").toLocaleDateString(),
    time: new Date("2024-10-08T14:30:00").toLocaleTimeString(),
    customer: "John Doe",  // Example customer name
    
};
const bill2 = {
    restaurant: restaurantDetails2,
    items: billItems,
    total: calculateTotal(),
    date: new Date("2024-09-08T14:30:00").toLocaleDateString(),
    time: new Date("2024-09-08T14:30:00").toLocaleTimeString(),
    customer: "John Doe",  // Example customer name
    
};
const bill3 = {
    restaurant: restaurantDetails3,
    items: billItems4,
    total: calculateTotal(),
    date: new Date("2024-07-25T14:30:00").toLocaleDateString(),
    time: new Date("2024-07-25T14:30:00").toLocaleTimeString(),
    customer: "John Doe",  // Example customer name
    
};

module.exports = bill3;
