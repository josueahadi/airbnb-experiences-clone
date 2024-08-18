import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

const cards = data.map((card) => {
  return (
    <Card
      key={card.id}
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
      openSpots={card.openSpots}
    />
  );
});

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="flex flex-nowrap flex-row overflow-x-auto gap-5 py-16 px-6 sm:px-10 md:px-20">
        {cards}
      </section>
    </div>
  );
}

export default App;
