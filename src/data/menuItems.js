const menuItems = {
  1: { // Burger Palace
    categories: [
      {
        id: "burgers",
        name: "Burgers",
        items: [
          {
            id: "b1",
            name: "Classic Cheeseburger",
            description: "Angus beef patty with cheddar cheese, lettuce, tomato, and special sauce",
            price: 8.99,
            image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "b2",
            name: "Bacon BBQ Burger",
            description: "Angus beef patty with bacon, cheddar, BBQ sauce, and crispy onions",
            price: 10.99,
            image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "b3",
            name: "Mushroom Swiss Burger",
            description: "Angus beef patty with sautéed mushrooms, swiss cheese, and truffle aioli",
            price: 11.99,
            image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          },
          {
            id: "b4",
            name: "Veggie Burger",
            description: "Plant-based patty with avocado, lettuce, tomato, and vegan mayo",
            price: 9.99,
            image: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          }
        ]
      },
      {
        id: "sides",
        name: "Sides",
        items: [
          {
            id: "s1",
            name: "French Fries",
            description: "Crispy golden fries with sea salt",
            price: 3.99,
            image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "s2",
            name: "Onion Rings",
            description: "Beer-battered onion rings with dipping sauce",
            price: 4.99,
            image: "https://images.pexels.com/photos/4676401/pexels-photo-4676401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          },
          {
            id: "s3",
            name: "Sweet Potato Fries",
            description: "Crispy sweet potato fries with chipotle mayo",
            price: 4.99,
            image: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          }
        ]
      },
      {
        id: "drinks",
        name: "Drinks",
        items: [
          {
            id: "d1",
            name: "Soft Drink",
            description: "Your choice of soda",
            price: 2.49,
            image: "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          },
          {
            id: "d2",
            name: "Milkshake",
            description: "Hand-spun milkshake in vanilla, chocolate, or strawberry",
            price: 5.99,
            image: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          }
        ]
      }
    ]
  },
  2: { // Pizza Heaven
    categories: [
      {
        id: "pizzas",
        name: "Pizzas",
        items: [
          {
            id: "p1",
            name: "Margherita",
            description: "Fresh mozzarella, tomato sauce, and basil",
            price: 12.99,
            image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "p2",
            name: "Pepperoni",
            description: "Pepperoni, mozzarella, and tomato sauce",
            price: 14.99,
            image: "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "p3",
            name: "Vegetarian",
            description: "Bell peppers, onions, mushrooms, olives, and tomatoes",
            price: 15.99,
            image: "https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          },
          {
            id: "p4",
            name: "Meat Lover's",
            description: "Pepperoni, sausage, bacon, and ham",
            price: 17.99,
            image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          }
        ]
      },
      {
        id: "pasta",
        name: "Pasta",
        items: [
          {
            id: "pa1",
            name: "Spaghetti Bolognese",
            description: "Spaghetti with rich meat sauce and parmesan",
            price: 13.99,
            image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          },
          {
            id: "pa2",
            name: "Fettuccine Alfredo",
            description: "Fettuccine in creamy alfredo sauce",
            price: 12.99,
            image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          }
        ]
      },
      {
        id: "desserts",
        name: "Desserts",
        items: [
          {
            id: "de1",
            name: "Tiramisu",
            description: "Classic Italian dessert with coffee and mascarpone",
            price: 6.99,
            image: "https://images.pexels.com/photos/6222/food-sugar-sweet-strawberry.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "de2",
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake with molten center",
            price: 7.99,
            image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          }
        ]
      }
    ]
  },
  3: { // Sushi Express
    categories: [
      {
        id: "rolls",
        name: "Sushi Rolls",
        items: [
          {
            id: "r1",
            name: "California Roll",
            description: "Crab, avocado, and cucumber",
            price: 8.99,
            image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "r2",
            name: "Spicy Tuna Roll",
            description: "Tuna and spicy mayo",
            price: 10.99,
            image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "r3",
            name: "Dragon Roll",
            description: "Eel, crab, cucumber topped with avocado",
            price: 14.99,
            image: "https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          }
        ]
      },
      {
        id: "sashimi",
        name: "Sashimi",
        items: [
          {
            id: "sa1",
            name: "Salmon Sashimi",
            description: "Fresh slices of premium salmon",
            price: 12.99,
            image: "https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "sa2",
            name: "Tuna Sashimi",
            description: "Fresh slices of premium tuna",
            price: 13.99,
            image: "https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          }
        ]
      }
    ]
  },
  4: { // Taco Fiesta
    categories: [
      {
        id: "tacos",
        name: "Tacos",
        items: [
          {
            id: "t1",
            name: "Carne Asada Taco",
            description: "Grilled steak with onions, cilantro, and salsa",
            price: 3.99,
            image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "t2",
            name: "Chicken Taco",
            description: "Grilled chicken with lettuce, cheese, and pico de gallo",
            price: 3.49,
            image: "https://images.pexels.com/photos/4958641/pexels-photo-4958641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          },
          {
            id: "t3",
            name: "Fish Taco",
            description: "Beer-battered fish with cabbage slaw and chipotle crema",
            price: 4.49,
            image: "https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          }
        ]
      },
      {
        id: "burritos",
        name: "Burritos",
        items: [
          {
            id: "bu1",
            name: "Carne Asada Burrito",
            description: "Grilled steak with rice, beans, cheese, and salsa",
            price: 9.99,
            image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: true
          },
          {
            id: "bu2",
            name: "Veggie Burrito",
            description: "Grilled vegetables with rice, beans, and guacamole",
            price: 8.99,
            image: "https://images.pexels.com/photos/6605207/pexels-photo-6605207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            popular: false
          }
        ]
      }
    ]
  }
};

export default menuItems;