import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const INFO = {
  phoneDisplay: "(801) 609-2290",
  phoneTel: "tel:+8016092290",

  // Replace these with real links
  giftCardUrl: "https://aromacafeutah.kulacart.net/",
  orderOnlineUrl: "https://aromacafeutah.kulacart.net/",

  addressLines: [
    "175 East Main Street",
    "Santaquin, UT",
  ],

  hoursLines: [
    "Mon–Sat: 7:00 AM – 3:00 PM",
    "Sun: 8:00 AM – 2:00 PM",
  ],

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/_.aromacafe._/" },
    { label: "Facebook", href: "https://www.facebook.com/AromaCafe12/" },
    { label: "Google", href: "https://www.google.com/search?q=Aroma+Cafe+Santaquin" },
  ],

  favorites: [
    {
      name: "French Toast",
      description:
        "Start your morning right with our homemade French toast topped with fresh berries.",
      image: "/src/assets/food/food-5.jpeg",
    },
    {
      name: "Chicken Ciabatta",
      description:
        "If you’re a fan of rich flavor, try our customer-favorite Chicken Ciabatta sandwich.",
      image: "/src/assets/food/food-6.jpeg",
    },
    {
      name: "Philly Cheesesteak",
      description:
        "You can’t go wrong with a true American classic—our Philly Cheesesteak.",
      image: "/src/assets/food/food-7.jpeg",
    },
  ],
  

  reviews: [
    { author: "Tory Janssen", text: `Went to Sunday breakfast with my best friend and had an amazing experience! This place is so cute inside. All the employees were really friendly and stayed positive & kind, even while they were super busy.

    Our server was helpful in providing recommendations and coming back to check on us.
    
    Their food is delicious, and the portions are pretty big. If you don’t like black coffee, their vanilla creamer was freaking awesome!
    
    The pancake was my favorite, so yummy!
    
    It is a little pricey, but for the experience and food quality/serving sizes it’s worth it!!` },
    { author: "Joshua Cooke", text: `I am so glad that there is FINALLY a place like this in our area. First, the transformation of the space is wonderful. My wife and I loved the vibe that we felt as we enjoyed our breakfast. Service was top notch. The food was so good. Mexican hot chocolate from scratch was a delight. The fruit crepes were a light option for my wife packed with flavor, and the chicken fried steak and eggs was crispy, the gravy was perfect, and the potatoes were golden and crispy. What a surprise when my English muffin ended up as a lightly toasted garlic butter goodness. I hope Aroma succeeds king term. We will certainly return`},
    { author: "Breawn Cervantez", text: `They were busy and for good reasons! We only waited a few minutes to be seated and once we were, our waitress was attentive and it didn’t take long to get our food. Great coffee, excellent fresh food and a fun atmosphere! This is definitely our new Sunday brunch spot!` },
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
        <Route path="/menu" element={<Menu />} />
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
