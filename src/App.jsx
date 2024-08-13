import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Card from "./components/Card";
import KatieZaferesImage from "./assets/katie-zaferes.png";

const cardsInfo = [
  {
    id: 1, // Unique identifier
    img: KatieZaferesImage,
    rating: 5.0,
    reviewCount: 6,
    country: "USA",
    title: "Life Lessons with Katie Zaferes",
    price: 136,
    isSoldOut: true,
  },
  {
    id: 2, // Unique identifier
    img: KatieZaferesImage,
    rating: 4.9,
    reviewCount: 5,
    country: "Canada",
    title: "Learn Cooking with John Doe",
    price: 120,
    isSoldOut: false,
  },
  {
    id: 3, // Unique identifier
    img: KatieZaferesImage,
    rating: 4.8,
    reviewCount: 12,
    country: "UK",
    title: "Master Photography with Jane Doe",
    price: 150,
    isSoldOut: false,
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="flex flex-row gap-6 py-16 px-6 sm:px-10 md:px-20">
        {cardsInfo.map((card) => (
          <Card
            key={card.id}
            img={card.img}
            rating={card.rating}
            reviewCount={card.reviewCount}
            country={card.country}
            title={card.title}
            price={card.price}
            isSoldOut={card.isSoldOut}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
