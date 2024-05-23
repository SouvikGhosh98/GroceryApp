import React from "react";
import "./Home.css";
import Product from "./Product";
import Banner from "./Components/productHomePage/advertiseBanner/Banner";
import Carousel from "./Components/productHomePage/Carousel/Carousel";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from "./Components/CommonUI/Loader";
import SomethingWrong from "./Components/CommonUI/SomethingWrong";

// const products = [
//   {
//     "id": 1,
//     "name": "fbvbvcb",
//     "price": 50,
//     "description": "Fresh and nutritious bananas, packed with vitamins and minerals.",
//     "image": "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
//     "quantity": "1 dozen",
//     "isAvailable": true,
//     "category": "Fruits"
//   },
//   {
//     "id": 2,
//     "name": "Basmati Rice",
//     "price": 200,
//     "description": "Premium quality long-grain Basmati rice, perfect for biryani and pulao.",
//     "image": "https://example.com/basmati-rice.jpg",
//     "quantity": "1 kg",
//     "isAvailable": true,
//     "category": "Rice"
//   },
//   {
//     "id": 3,
//     "name": "Whole Wheat Flour",
//     "price": 50,
//     "description": "Stone-ground whole wheat flour, ideal for making chapatis and rotis.",
//     "image": "https://example.com/whole-wheat-flour.jpg",
//     "quantity": "5 kg",
//     "isAvailable": true,
//     "category": "Flour"
//   },
//   {
//     "id": 4,
//     "name": "Sunflower Oil",
//     "price": 150,
//     "description": "Refined sunflower oil, suitable for cooking and frying.",
//     "image": "https://example.com/sunflower-oil.jpg",
//     "quantity": "1 liter",
//     "isAvailable": true,
//     "category": "Oil"
//   },
//   {
//     "id": 5,
//     "name": "Turmeric Powder",
//     "price": 30,
//     "description": "Pure turmeric powder, enhances the flavor and color of Indian dishes.",
//     "image": "https://example.com/turmeric-powder.jpg",
//     "quantity": "250 grams",
//     "isAvailable": true,
//     "category": "Spices"
//   },
//   {
//     "id": 6,
//     "name": "Red Lentils (Masoor Dal)",
//     "price": 80,
//     "description": "High-quality split red lentils, rich in protein and fiber.",
//     "image": "https://example.com/red-lentils.jpg",
//     "quantity": "1 kg",
//     "isAvailable": true,
//     "category": "Pulses"
//   },
//   {
//     "id": 7,
//     "name": "Milk",
//     "price": 25,
//     "description": "Fresh and pasteurized cow's milk, packed with essential nutrients.",
//     "image": "https://example.com/milk.jpg",
//     "quantity": "1 liter",
//     "isAvailable": true,
//     "category": "Dairy"
//   },
//   {
//     "id": 8,
//     "name": "Potatoes",
//     "price": 20,
//     "description": "Farm-fresh potatoes, versatile vegetable used in various Indian recipes.",
//     "image": "https://example.com/potatoes.jpg",
//     "quantity": "1 kg",
//     "isAvailable": true,
//     "category": "Vegetables"
//   },
//   {
//     "id": 9,
//     "name": "Onions",
//     "price": 15,
//     "description": "Medium-sized onions, essential ingredient in Indian cooking.",
//     "image": "https://example.com/onions.jpg",
//     "quantity": "1 kg",
//     "isAvailable": true,
//     "category": "Vegetables"
//   },
//   {
//     "id": 10,
//     "name": "Tomatoes",
//     "price": 25,
//     "description": "Ripe and juicy tomatoes, used in curries, salads, and chutneys.",
//     "image": "https://example.com/tomatoes.jpg",
//     "quantity": "1 kg",
//     "isAvailable": true,
//     "category": "Vegetables"
//   },
//   {
//     "id": 11,
//     "name": "Green Tea",
//     "price": 100,
//     "description": "Premium green tea leaves, rich in antioxidants and beneficial for health.",
//     "image": "https://example.com/green-tea.jpg",
//     "quantity": "100 grams",
//     "isAvailable": true,
//     "category": "Beverages"
//   },
//   {
//     "id": 12,
//     "name": "Sugar",
//     "price": 40,
//     "description": "Refined white sugar, perfect for sweetening beverages and desserts.",
//     "image": "https://example.com/sugar.jpg",
//     "quantity": "1 kg",
//     "isAvailable": true,
//     "category": "Sweeteners"
//   },
//   {
//     "id": 13,
//     "name": "Salt",
//     "price": 20,
//     "description": "Fine iodized salt, enhances the taste of food and preserves it.",
//     "image": "https://example.com/salt.jpg",
//     "quantity": "1 kg",
//     "isAvailable": true,
//     "category": "Spices"
//   },
//   {
//     "id": 14,
//     "name": "Green Chilies",
//     "price": 30,
//     "description": "Fresh green chilies, adds heat and flavor to Indian dishes.",
//     "image": "https://example.com/green-chilies.jpg",
//     "quantity": "250 grams",
//     "isAvailable": true,
//     "category": "Vegetables"
//   },
//   {
//     "id": 15,
//     "name": "Cumin Seeds (Jeera)",
//     "price": 50,
//     "description": "Whole cumin seeds, aromatic spice used in tempering and seasoning.",
//     "image": "https://example.com/cumin-seeds.jpg",
//     "quantity": "100 grams",
//     "isAvailable": true,
//     "category": "Spices"
//   },
//   {
//     "id": 16,
//     "name": "Chickpeas (Chana)",
//     "price": 60,
//     "description": "Premium quality chickpeas, rich in protein and dietary fiber.",
//     "image": "https://example.com/chickpeas.jpg",
//     "quantity": "500 grams",
//     "isAvailable": true,
//     "category": "Pulses"
//   },
//   {
//     "id": 17,
//     "name": "Rice Flour",
//     "price": 40,
//     "description": "Fine rice flour, used in making snacks, sweets, and batters.",
//     "image": "https://example.com/rice-flour.jpg",
//     "quantity": "500 grams",
//     "isAvailable": true,
//     "category": "Flour"
//   },
//   {
//     "id": 18,
//     "name": "Black Tea",
//     "price": 80,
//     "description": "High-quality black tea leaves, perfect for brewing a strong cup of tea.",
//     "image": "https://example.com/black-tea.jpg",
//     "quantity": "250 grams",
//     "isAvailable": true,
//     "category": "Beverages"
//   },
//   {
//     "id": 19,
//     "name": "Mustard Oil",
//     "price": 120,
//     "description": "Cold-pressed mustard oil, adds a distinctive flavor to Indian cuisine.",
//     "image": "https://example.com/mustard-oil.jpg",
//     "quantity": "1 liter",
//     "isAvailable": true,
//     "category": "Oil"
//   },
//   {
//     "id": 20,
//     "name": "Ghee",
//     "price": 250,
//     "description": "Pure cow ghee, rich and aromatic, enhances the taste of food.",
//     "image": "https://example.com/ghee.jpg",
//     "quantity": "500 grams",
//     "isAvailable": true,
//     "category": "Dairy"
//   },
//   {
//     "id": 21,
//     "name": "Coriander Powder",
//     "price": 40,
//     "description": "Ground coriander seeds, adds a mild and citrusy flavor to dishes.",
//     "image": "https://example.com/coriander-powder.jpg",
//     "quantity": "100 grams",
//     "isAvailable": true,
//     "category": "Spices"
//   },
//   {
//     "id": 22,
//     "name": "Cinnamon Sticks",
//     "price": 70,
//     "description": "Whole cinnamon sticks, adds warmth and sweetness to recipes.",
//     "image": "https://example.com/cinnamon-sticks.jpg",
//     "quantity": "50 grams",
//     "isAvailable": true,
//     "category": "Spices"
//   },
//   {
//     "id": 23,
//     "name": "Paneer",
//     "price": 150,
//     "description": "Fresh cottage cheese, versatile ingredient used in Indian cooking.",
//     "image": "https://example.com/paneer.jpg",
//     "quantity": "200 grams",
//     "isAvailable": true,
//     "category": "Dairy"
//   },
//   {
//     "id": 24,
//     "name": "Mangoes",
//     "price": 60,
//     "description": "Juicy and sweet mangoes, king of fruits, enjoyed in various forms.",
//     "image": "https://example.com/mangoes.jpg",
//     "quantity": "1 kg",
//     "isAvailable": true,
//     "category": "Fruits"
//   },
//   {
//     "id": 25,
//     "name": "Green Peas",
//     "price": 40,
//     "description": "Fresh green peas, adds sweetness and crunch to dishes.",
//     "image": "https://example.com/green-peas.jpg",
//     "quantity": "500 grams",
//     "isAvailable": true,
//     "category": "Vegetables"
//   },
//   {
//     "id": 26,
//     "name": "Coconut Oil",
//     "price": 180,
//     "description": "Virgin coconut oil, ideal for cooking, baking, and skincare.",
//     "image": "https://example.com/coconut-oil.jpg",
//     "quantity": "500 ml",
//     "isAvailable": true,
//     "category": "Oil"
//   },
//   {
//     "id": 27,
//     "name": "Garam Masala",
//     "price": 50,
//     "description": "Aromatic spice blend, adds warmth and depth to Indian curries.",
//     "image": "https://example.com/garam-masala.jpg",
//     "quantity": "100 grams",
//     "isAvailable": true,
//     "category": "Spices"
//   },
//   {
//     "id": 28,
//     "name": "Almonds",
//     "price": 200,
//     "description": "Premium quality almonds, rich in healthy fats, protein, and vitamins.",
//     "image": "https://example.com/almonds.jpg",
//     "quantity": "250 grams",
//     "isAvailable": true,
//     "category": "Dry Fruits"
//   }
// ];


// const categories = [
//   { id: 1, name: "Fruits & Vegetables", image: "img-link", subCategory: "" },
//   { id: 2, name: "Dairy & Eggs", image: "img-link", subCategory: "" },
//   { id: 3, name: "Grains & Cereals", image: "img-link", subCategory: "" },
//   { id: 4, name: "Beverages", image: "img-link", subCategory: "" },
//   { id: 5, name: "Snacks & Sweets", image: "img-link", subCategory: "" },
//   { id: 6, name: "Household Essentials", image: "img-link", subCategory: "" },
//   { id: 7, name: "Personal Care", image: "img-link", subCategory: "" },
//   { id: 8, name: "Frozen Foods", image: "img-link", subCategory: "" },
//   { id: 9, name: "Meat & Seafood", image: "img-link", subCategory: "" },
//   { id: 10, name: "Spices & Condiments", image: "img-link", subCategory: "" },
//   { id: 11, name: "Bakery & Bread", image: "img-link", subCategory: "" },
//   { id: 12, name: "Baby Care", image: "img-link", subCategory: "" },
//   { id: 13, name: "Pet Supplies", image: "img-link", subCategory: "" },
//   { id: 14, name: "Health & Wellness", image: "img-link", subCategory: "" },
//   { id: 15, name: "Cleaning Supplies", image: "img-link", subCategory: "" },
//   { id: 16, name: "Kitchen Essentials", image: "img-link", subCategory: "" },
//   { id: 17, name: "Cooking Oils & Ghee", image: "img-link", subCategory: "" },
//   { id: 18, name: "Organic & Natural", image: "img-link", subCategory: "" },
//   { id: 19, name: "Packaged Foods", image: "img-link", subCategory: "" },
//   { id: 20, name: "Home Care", image: "img-link", subCategory: "" },
//   { id: 21, name: "Bath & Body", image: "img-link", subCategory: "" },
//   { id: 22, name: "Breakfast & Cereal", image: "img-link", subCategory: "" },
//   { id: 23, name: "Noodles & Pasta", image: "img-link", subCategory: "" },
//   { id: 24, name: "Tea & Coffee", image: "img-link", subCategory: "" },
//   { id: 25, name: "Desserts & Toppings", image: "img-link", subCategory: "" },
//   { id: 26, name: "Dried Fruits & Nuts", image: "img-link", subCategory: "" },
//   { id: 27, name: "Health Drinks & Supplements", image: "img-link", subCategory: "" },
//   { id: 28, name: "Hygiene & Care", image: "img-link", subCategory: "" },
//   { id: 29, name: "Sauces & Pickles", image: "img-link", subCategory: "" },
//   { id: 30, name: "Sugar & Salt", image: "img-link", subCategory: "" }
// ];


// const categoryVise = [
//   {
//     "Vegetables": [
//       {
//         "id": 1,
//         "name": "Potato",
//         "price": 50,
//         "description": "Fresh and nutritious potato.",
//         "image": "https://example.com/potato.jpg",
//         "quantity": "500 grams",
//         "isAvailable": true,
//         "category": "Vegetables"
//       },
//       {
//         "id": 2,
//         "name": "Tomato",
//         "price": 30,
//         "description": "Juicy tomato.",
//         "image": "https://example.com/tomato.jpg",
//         "quantity": "500 grams",
//         "isAvailable": true,
//         "category": "Vegetables"
//       },
        
//       {
//         "id": 3,
//         "name": "Onion",
//         "price": 40,
//         "description": "Fresh and aromatic onion.",
//         "image": "https://example.com/onion.jpg",
//         "quantity": "500 grams",
//         "isAvailable": true,
//         "category": "Vegetables"
//       },
//       {
//         "id": 4,
//         "name": "Cucumber",
//         "price": 25,
//         "description": "Cool and refreshing cucumber.",
//         "image": "https://example.com/cucumber.jpg",
//         "quantity": "250 grams",
//         "isAvailable": true,
//         "category": "Vegetables"
//       },
        
//       {
//         "id": 5,
//         "name": "Carrot",
//         "price": 35,
//         "description": "Sweet and crunchy carrot.",
//         "image": "https://example.com/carrot.jpg",
//         "quantity": "500 grams",
//         "isAvailable": true,
//         "category": "Vegetables"
//       },
//       {
//         "id": 6,
//         "name": "Spinach",
//         "price": 20,
//         "description": "Nutrient-rich spinach leaves.",
//         "image": "https://example.com/spinach.jpg",
//         "quantity": "250 grams",
//         "isAvailable": true,
//         "category": "Vegetables"
//       },
        
//       {
//         "id": 7,
//         "name": "Broccoli",
//         "price": 45,
//         "description": "Fresh and tender broccoli.",
//         "image": "https://example.com/broccoli.jpg",
//         "quantity": "500 grams",
//         "isAvailable": true,
//         "category": "Vegetables"
//       },
//       {
//         "id": 8,
//         "name": "Bell Pepper",
//         "price": 60,
//         "description": "Colorful and flavorful bell pepper.",
//         "image": "https://example.com/bell-pepper.jpg",
//         "quantity": "250 grams",
//         "isAvailable": true,
//         "category": "Vegetables"
//       }
        
//     ],
//     "Fruit": [
//       {
//         "id": 9,
//         "name": "Apple",
//         "price": 80,
//         "description": "Fresh and delicious apple.",
//         "image": "https://example.com/apple.jpg",
//         "quantity": "1 kg",
//         "isAvailable": true,
//         "category": "Fruit"
//       },
//       {
//         "id": 10,
//         "name": "Banana",
//         "price": 40,
//         "description": "Sweet and ripe banana.",
//         "image": "https://example.com/banana.jpg",
//         "quantity": "6 pieces",
//         "isAvailable": true,
//         "category": "Fruit"
//       },
       
//       {
//         "id": 11,
//         "name": "Orange",
//         "price": 60,
//         "description": "Juicy and tangy orange.",
//         "image": "https://example.com/orange.jpg",
//         "quantity": "500 grams",
//         "isAvailable": true,
//         "category": "Fruit"
//       },
//       {
//         "id": 12,
//         "name": "Grapes",
//         "price": 100,
//         "description": "Sweet and succulent grapes.",
//         "image": "https://example.com/grapes.jpg",
//         "quantity": "500 grams",
//         "isAvailable": true,
//         "category": "Fruit"
//       },
       
//       {
//         "id": 13,
//         "name": "Mango",
//         "price": 120,
//         "description": "Juicy and aromatic mango.",
//         "image": "https://example.com/mango.jpg",
//         "quantity": "1 kg",
//         "isAvailable": true,
//         "category": "Fruit"
//       },
//       {
//         "id": 14,
//         "name": "Pineapple",
//         "price": 150,
//         "description": "Sweet and tangy pineapple.",
//         "image": "https://example.com/pineapple.jpg",
//         "quantity": "1 piece",
//         "isAvailable": true,
//         "category": "Fruit"
//       }
//     ],
//     "Bakery": [
//       {
//         "id": 15,
//         "name": "Bread",
//         "price": 25,
//         "description": "Soft and fresh bread.",
//         "image": "https://example.com/bread.jpg",
//         "quantity": "1 loaf",
//         "isAvailable": true,
//         "category": "Bakery"
//       },
//       {
//         "id": 16,
//         "name": "Cake",
//         "price": 150,
//         "description": "Delicious cake for any occasion.",
//         "image": "https://example.com/cake.jpg",
//         "quantity": "500 grams",
//         "isAvailable": true,
//         "category": "Bakery"
//       },
      
//       {
//         "id": 17,
//         "name": "Brownie",
//         "price": 80,
//         "description": "Rich and fudgy brownie.",
//         "image": "https://example.com/brownie.jpg",
//         "quantity": "250 grams",
//         "isAvailable": true,
//         "category": "Bakery"
//       },
//       {
//         "id": 18,
//         "name": "Muffin",
//         "price": 50,
//         "description": "Moist and flavorful muffin.",
//         "image": "https://example.com/muffin.jpg",
//         "quantity": "1 piece",
//         "isAvailable": true,
//         "category": "Bakery"
//       },
      
//       {
//         "id": 19,
//         "name": "Croissant",
//         "price": 35,
//         "description": "Buttery and flaky croissant.",
//         "image": "https://example.com/croissant.jpg",
//         "quantity": "1 piece",
//         "isAvailable": true,
//         "category": "Bakery"
//       },
//       {
//         "id": 20,
//         "name": "Donut",
//         "price": 30,
//         "description": "Sweet and indulgent donut.",
//         "image": "https://example.com/donut.jpg",
//         "quantity": "1 piece",
//         "isAvailable": true,
//         "category": "Bakery"
//       }
      
//     ],
//     "Diary": [
//       {
//         "id": 21,
//         "name": "Milk",
//         "price": 30,
//         "description": "Fresh and creamy milk.",
//         "image": "https://example.com/milk.jpg",
//         "quantity": "1 liter",
//         "isAvailable": true,
//         "category": "Diary"
//       },
//       {
//         "id": 22,
//         "name": "Cheese",
//         "price": 100,
//         "description": "Tasty and nutritious cheese.",
//         "image": "https://example.com/cheese.jpg",
//         "quantity": "250 grams",
//         "isAvailable": true,
//         "category": "Diary"
//       },
//       {
//         "id": 23,
//         "name": "Yogurt",
//         "price": 20,
//         "description": "Creamy and refreshing yogurt.",
//         "image": "https://example.com/yogurt.jpg",
//         "quantity": "500 grams",
//         "isAvailable": true,
//         "category": "Diary"
//       },
//       {
//         "id": 24,
//         "name": "Butter",
//         "price": 50,
//         "description": "Rich and creamy butter.",
//         "image": "https://example.com/butter.jpg",
//         "quantity": "100 grams",
//         "isAvailable": true,
//         "category": "Diary"
//       }
//     ]
//   }
// ]


function Home() {


  

  
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [categoryViseProducts,setcategoryViseProducts] = useState(null);

  const [error, setError] = useState(null);

  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    let sourceProduct = axios.CancelToken.source();
    let sourceCategory = axios.CancelToken.source();
  
    axios.get('http://localhost:8081/product-service/getSetOfProducts', { cancelToken: sourceProduct.token })
      .then(response => setProducts(response.data))
      .catch(error => {
        if (!axios.isCancel(error)) {
          setError(error.message);
        }
      });

      axios.get('http://localhost:8081/product-service/getAllCategories', { cancelToken: sourceCategory.token })
      .then(response => {setCategories(response.data);
        // console.log(categoryViseProducts);
      })
      .catch(error => {
        if (!axios.isCancel(error)) {
          setError(error.message);
        }
      });      
  
    axios.get('http://localhost:8081/product-service/getAllProducts', { cancelToken: sourceCategory.token })
      .then(response => {setcategoryViseProducts(response.data);
        // console.log(categoryViseProducts);
      })
      .catch(error => {
        if (!axios.isCancel(error)) {
          setError(error.message);
        }
      });
  
    return () => {
      sourceProduct.cancel();
      sourceCategory.cancel();
    };
  }, []);

  
  

    if (error) {
      return <div>Error: {error}

      <SomethingWrong></SomethingWrong>
              
      
      </div>;
    }
  
    if (!products || !categoryViseProducts) {
      return <Loader></Loader>;
    }
 



// console.log(products);
console.log(categoryViseProducts);
// console.log(categoryVise);





  return (
    <div className="home">
      <div className="banner-section">
        <Banner></Banner>
      </div>
      <div className="carousel-section">
        <Carousel data={products} type="Products" />
      </div>
      <div className="carousel-section">
        <Carousel data={categories} type="Categories" />
      </div>

      {Object.entries(categoryViseProducts).map(([category, items]) => (
        <div key={category} className="carousel-section">
          <Carousel data={items} type={category} />
        </div>
      ))}

    </div>
  );
}

export default Home;