import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: "joe",
      email: "joe@email.com",
      password: bcrypt.hashSync('ABC123'),
      isAdmin: true,
    },
    {
      name: "Tim",
      email: "tim@email.com",
      password: bcrypt.hashSync('ABC.123'),
      isAdmin: false,
    }
  ],


  products: [
    {
      //_id: '1',
      name: "Bean Spaghetti Pasta",
      slug: "bean-spaghetti-pasta",
      category: "Organic Beans",
      image: "/images/bean-pasta.jpg",
      price: 27.99,
      countInStock: 300,
      brand: "EXPLORE CUISINE",
      flavor: "Black bean",
      rating: 4.8,
      numReviews: 227,
      description: "Gluten Free Pasta, Easy to Make - USDA Certified Organic, Vegan, Kosher, Non GMO"
    },
    {
      //_id: '2',
      name: "Plant-Based Protein Powder",
      slug: "plant-based-protein-powder",
      category: "Protein",
      image: "/images/protein-powder.jpg",
      price: 24.99,
      countInStock: 200,
      brand: "MRM",
      flavor: "Chocolate Mocha",
      rating: 4.5,
      numReviews: 1337,
      description: "Easy to Digest | with BCAAs| Vegan + Gluten-Free | Clinically Tested| Digestive enzymes"
    },
    {
      //_id: '3',
      name: "Plant-Based Protein Bars",
      slug: "plant-based-protein-bar",
      category: "Protein",
      image: "/images/protein-bar.jpg",
      price: 40.95,
      countInStock: 150,
      brand: "Garden of Life",
      flavor: "Chocolate Fudge ",
      rating: 4.6,
      numReviews: 397,
      description: "Organic Fit Bar, Chocolate Fudge (12 per carton) - Burn Fat, Satisfy Hunger and Fight Cravings, Low Sugar Plant Protein Bar with Fiber"
    },
    {
      //_id: '4',
      name: "Stevia",
      slug: "stevia",
      category: "Organic Sugar",
      image: "/images/stevia.jpg",
      price: 7.99,
      countInStock: 900,
      brand: "Stevia Select",
      flavor: "Stevia",
      rating: 4.3,
      numReviews: 356,
      description: "Sugar Free Plant Based Stevia Sweetener USDA Certified | Non GMO Pure Stevia Extract from Sweet Leaf"
    }, {
      //_id: '5',
      name: "Organic Peanut Butter",
      slug: "organic-peanut-butter",
      category: "Organic Beans",
      image: "/images/peanut-butter.jpg",
      price: 27.99,
      countInStock: 120,
      brand: "WOODSTOCK",
      flavor: "Peanut",
      rating: 4.0,
      numReviews: 7,
      description: "Certified Kosher Smooth, creamy, and unsalted, Only 1 ingredient"
    },
    {
      //_id: '6',
      name: "Nutritional Yeast Powder",
      slug: "nutritional-yeast-powder",
      category: "Vitamins",
      image: "/images/yeast-powder.jpg",
      price: 33.24,
      countInStock: 90,
      brand: "NOW",
      flavor: "N/A",
      rating: 4.2,
      numReviews: 92,
      description: "Non-GMO, Vegan/Vegetarian, Kosher, Soy Free, Sugar Free, Dairy Free"
    }
  ]

}

export default data;