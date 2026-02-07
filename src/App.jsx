import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

/**
 * IMPORTANT (Vite):
 * - Do NOT use "/src/assets/..." in runtime data.
 * - Import assets and use the imported URL.
 */

// Menu item images
import food5 from "./assets/food/food-5.jpeg";
import food6 from "./assets/food/food-6.jpeg";
import food7 from "./assets/food/food-7.jpeg";
import food8 from "./assets/food/food-8.jpeg";
import food9 from "./assets/food/food-9.jpeg";
import food10 from "./assets/food/food-10.jpeg";
import food11 from "./assets/food/food-11.jpeg";
import food12 from "./assets/food/food-12.jpeg";
import food13 from "./assets/food/food-13.jpeg";
import food14 from "./assets/food/food-14.jpeg";
import food15 from "./assets/food/food-15.jpeg";
import food16 from "./assets/food/food-16.jpeg";
import food17 from "./assets/food/food-17.jpeg";
import food18 from "./assets/food/food-18.jpeg";
import food19 from "./assets/food/food-19.jpeg";
import food20 from "./assets/food/food-20.jpeg";
import food21 from "./assets/food/food-21.jpeg";

const menu = [
  {
    section: "Breakfast",
    note: "** Served with house potatoes",
    items: [
      { name: "The Sunshine Breakfast", description: "Two eggs any style, and toast." },
      {
        name: "The Boss",
        description:
          "Two eggs any style, 2 slices of bacon, 2 links of sausage, and ham. Served with toast, and your choice of a pancakes or waffle.",
      },
      {
        name: "The Aroma Classic",
        description: "2 eggs any style, your choice of meat, toast, and pancakes or waffle.",
        image: food8,
      },
      {
        name: "Ciabatta Egg Sandwich",
        description:
          "Scrambled eggs, pork sausage, ham, tomato, avocado, spinach, provolone cheese, and chipotle dressing.",
      },
      {
        name: "The Melt",
        description:
          "All your breakfast essentials in one sandwich. Scrambled eggs, bacon, mayo, American and Swiss cheese.",
      },
      {
        name: "Biscuits and Gravy",
        description:
          "Two buttermilk biscuits smothered in sausage gravy, 2 eggs any style, and your choice of bacon or sausage.",
      },
      {
        name: "Eggs Benedict",
        description:
          "Two poached eggs, ham, spinach, and avocado served on a toasted English muffin topped with hollandaise sauce.",
        image: food9,
      },
      {
        name: "Chicken Fried Steak and Eggs",
        description:
          "8oz breaded steak smothered in sausage gravy, served with 2 eggs any style, house potatoes and a slice of toast.",
      },
      {
        name: "Americas Most Wanted",
        description: "10oz ribeye cooked to order, 2 eggs any style, served with house potatoes and toast.",
      },
      {
        name: "Bone In Ham Steak and Eggs",
        description:
          "Smoked ham steak served with 2 eggs your way, house potatoes, toast. Your choice of pancakes or waffle.",
        image: food10,
      },
    ],
  },

  {
    section: "Something Sweet",
    items: [
      {
        name: "French Toast",
        description:
          "Texas toast dipped in vanilla egg batter, dusted with cinnamon, powdered sugar, topped with butter and syrup.",
        image: food5,
      },
      {
        name: "Just Pancakes",
        description: "Single Stack (2) – Short Stack (4)",
        image: food11,
      },
      {
        name: "Waffles (2)",
        description: "Plain or Fruit Waffles. Butter, powdered sugar, and syrup",
        image: food12,
      },
      {
        name: "Crepes (3)",
        description: "Dulce de Leche, Cinnamon Sugar, Nutella and Banana, or Fresh Fruit",
        image: food13,
      },
    ],
  },

  {
    section: "Mexican Style Breakfast",
    items: [
      {
        name: "Aromas House Skillet",
        description:
          "Diced red potatoes, bacon, onion, bell pepper, mushrooms, 2 eggs any style, cheddar cheese and a side of toast.",
        image: food14,
      },
      {
        name: "Classic Breakfast Burrito",
        description:
          "Scrambled eggs with ham and bacon, cheese and refried beans wrapped up in a warm flour tortilla, served with salsa and our house potatoes.",
      },
      { name: "The Mexican Breakfast Burrito", description: "Chorizo, potatoes, onion, beans, and cheese." },
      {
        name: "Huevos Rancheros",
        description:
          "2 corn tostadas topped with 2 fried eggs, our home-made salsa, avocado and Mexican cheese. Served with refried beans.",
      },
      {
        name: "Chilaquiles and Eggs",
        description:
          "Tortilla chips simmered in our mild red sauce, 2 fried eggs topped with Mexican cheese and sour cream. Served with refried beans.",
        image: food15,
      },
    ],
  },

  {
    section: "Omeletes",
    note: "** Served with house potatoes and your choice of toast.",
    items: [
      { name: "Ham and Cheese" },
      { name: "Veggie Omelet", description: "Cheddar cheese loaded with veggies." },
      {
        name: "California Omelet",
        description: "Ham, bacon, bell pepper, onion, mushrooms, jalapeno, avocado and cheddar cheese.",
        image: food16,
      },
    ],
  },

  {
    section: "Salads",
    items: [
      {
        name: "Caesar Salad",
        description: "Romaine lettuce tossed with parmesan cheese, croutons, and creamy Caesar dressing.",
      },
      {
        name: "Aroma Classic",
        description: "A mix of greens, avocado, onion, tomato, cheese, and tender grilled chicken.",
        image: food17, // fixed duplicate image key
      },
      {
        name: "Chef salad",
        description: "Romaine lettuce, ham, turkey, tomato, hard-boiled egg, croutons, and cheddar cheese.",
      },
      { name: "Garden salad", description: "Romaine lettuce, tomato, onion, cucumber, and croutons." },
      { name: "Soup of the day", description: "**Ask your server what soups we have for the day" },
    ],
  },

  {
    section: "Wagyu Burgers",
    note: "**Served with French fries, sweet potato fries, or onion rings. Substitute for a salad.",
    items: [
      { name: "Aroma Classic Burger", image: food18 },
      { name: "Bacon Cheeseburger", description: "Double patty, bacon, cheddar cheese, and burger sauce on a toasted bun." },
      {
        name: "Aromas Specialty Burger",
        description: "Double patty, bacon, avocado, tomato, lettuce, grilled onion, and jalapeno.",
        image: food19,
      },
    ],
  },

  {
    section: "Sandwiches",
    note: "**served with your choice of French fries, sweet potato fries, onion rings, or a salad.",
    items: [
      { name: "Philly Cheesesteak", image: food7 },
      { name: "BLT", description: "Crispy bacon, lettuce, tomato, and mayo." },
      { name: "Classic Club", description: "Bacon, turkey, ham, mayo, provolone cheese, lettuce, and tomato." },
      {
        name: "Chicken Ciabatta",
        description: "Grilled chicken, lettuce, tomato, onion, avocado, provolone cheese, chipotle mayo.",
        image: food6,
      },
      {
        name: "Turkey Melt",
        description:
          "Toasted ciabatta bread with turkey, bacon, mayo, avocado, tomato, lettuce, and Provolone Cheese",
      },
    ],
  },

  {
    section: "The Lighter Side",
    items: [
      {
        name: "Avocado toast",
        description:
          "Multigrain toast, avocado, tomato, spinach, alfalfa, seasoned with olive oil salt and pepper. One or Two Slices",
        image: food20,
      },
      {
        name: "Acai Bowl",
        description: "Strawberries, bananas, blueberries, kiwi, coconut, granola, and honey.",
        image: food21,
      },
      { name: "Yogurt Fruit Bowl", description: "Seasonal fruit topped with granola and honey." },
      { name: "Fruit Platter", description: "Seasonal Fruit" },
    ],
  },

  {
    section: "Kids Meals",
    note: "*Kids 10 and Under* Comes with soda, milk, or juice",
    items: [
      { name: "Jr Breakfast", description: "One egg, 1 slice of bacon, and house potatoes." },
      { name: "Pancake" },
      { name: "Waffle" },
      { name: "Crepe" },
      { name: "Grilled Cheese and Fries" },
      { name: "Chicken Tenders and Fries" },
    ],
  },

  {
    section: "Beverages",
    items: [
      {
        name: "Fountain Drinks",
        description:
          "**Pepsi, Diet Pepsi, Dr Pepper, Diet Dr Pepper, Rt Beer, Ice Tea, 7-up, Lemonade, Mt Dew",
      },
      { name: "Fresh Pressed Orange Juice" },
      { name: "Coffee" },
      { name: "Mexican Hot Chocolate" },
      { name: "Milk" },
      { name: "Chocolate Milk" },
      { name: "Apple or Cranberry Juice" },
    ],
  },

  {
    section: "Sides",
    items: [
      { name: "Bacon (2)" },
      { name: "Sausage Links (2)" },
      { name: "One Egg" },
      { name: "House Potatoes" },
      { name: "Side of Sauce or Gravy" },
    ],
  },
];

const INFO = {
  phoneDisplay: "(801) 609-2290",
  phoneTel: "tel:+18016092290",

  giftCardUrl: "https://aromacafeutah.kulacart.net/",
  orderOnlineUrl: "https://aromacafeutah.kulacart.net/",

  addressLines: ["175 East Main Street", "Santaquin, UT"],

  hoursLines: ["Mon–Sat: 7:00 AM – 3:00 PM", "Sun: 8:00 AM – 2:00 PM"],

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/_.aromacafe._/" },
    { label: "Facebook", href: "https://www.facebook.com/AromaCafe12/" },
    { label: "Google", href: "https://www.google.com/search?q=Aroma+Cafe+Santaquin" },
  ],

  favorites: [
    {
      name: "French Toast",
      description: "Start your morning right with our homemade French toast topped with fresh berries.",
      image: food5,
    },
    {
      name: "Chicken Ciabatta",
      description: "If you’re a fan of rich flavor, try our customer-favorite Chicken Ciabatta sandwich.",
      image: food6,
    },
    {
      name: "Philly Cheesesteak",
      description: "You can’t go wrong with a true American classic—our Philly Cheesesteak.",
      image: food7,
    },
  ],

  reviews: [
    {
      author: "Tory Janssen",
      text: `Went to Sunday breakfast with my best friend and had an amazing experience! This place is so cute inside. All the employees were really friendly and stayed positive & kind, even while they were super busy.

Our server was helpful in providing recommendations and coming back to check on us.

Their food is delicious, and the portions are pretty big. If you don’t like black coffee, their vanilla creamer was freaking awesome!

The pancake was my favorite, so yummy!

It is a little pricey, but for the experience and food quality/serving sizes it’s worth it!!`,
    },
    {
      author: "Joshua Cooke",
      text: `I am so glad that there is FINALLY a place like this in our area. First, the transformation of the space is wonderful. My wife and I loved the vibe that we felt as we enjoyed our breakfast. Service was top notch. The food was so good. Mexican hot chocolate from scratch was a delight. The fruit crepes were a light option for my wife packed with flavor, and the chicken fried steak and eggs was crispy, the gravy was perfect, and the potatoes were golden and crispy. What a surprise when my English muffin ended up as a lightly toasted garlic butter goodness. I hope Aroma succeeds long term. We will certainly return`,
    },
    {
      author: "Breawn Cervantez",
      text: `They were busy and for good reasons! We only waited a few minutes to be seated and once we were, our waitress was attentive and it didn’t take long to get our food. Great coffee, excellent fresh food and a fun atmosphere! This is definitely our new Sunday brunch spot!`,
    },
  ],
};

export default function App() {
  return (
    <>
      <Navbar phoneDisplay={INFO.phoneDisplay} phoneTel={INFO.phoneTel} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              phoneDisplay={INFO.phoneDisplay}
              phoneTel={INFO.phoneTel}
              giftCardUrl={INFO.giftCardUrl}
              orderOnlineUrl={INFO.orderOnlineUrl}
              favorites={INFO.favorites}
              reviews={INFO.reviews}
            />
          }
        />
        <Route path="/menu" element={<Menu menu={menu} orderOnlineUrl={INFO.orderOnlineUrl} />} />
      </Routes>

      <Footer
        addressLines={INFO.addressLines}
        phoneDisplay={INFO.phoneDisplay}
        phoneTel={INFO.phoneTel}
        hoursLines={INFO.hoursLines}
        socials={INFO.socials}
      />
    </>
  );
}
