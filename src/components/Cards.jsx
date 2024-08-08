import StarIcon from "../assets/star.png";
import KatieZaferesImage from "../assets/katie-zaferes.png";

const cardsInfo = [
  {
    img: KatieZaferesImage,
    rating: 5.0,
    reviewCount: 6,
    country: "USA",
    title: "Life Lessons with Katie Zaferes",
    price: 136,
  },
  {
    img: KatieZaferesImage,
    rating: 5.0,
    reviewCount: 6,
    country: "USA",
    title: "Life Lessons with Katie Zaferes",
    price: 136,
  },
  {
    img: KatieZaferesImage,
    rating: 5.0,
    reviewCount: 6,
    country: "USA",
    title: "Life Lessons with Katie Zaferes",
    price: 136,
  },
];

export default function Cards() {
  return (
    <section className="flex flex-row pt-16 px-6 sm:px-10 md:px-20">
      {cardsInfo.map((card, index) => (
        <div key={index} className="relative w-44 md:w-60">
          <img
            src={card.img}
            className="w-full rounded-xl"
            alt="Katie Zaferes"
          />
          <span className="uppercase text-[#222222] bg-[#FFFFFF] rounded-md px-2 py-1 absolute top-3 left-3">
            Sold Out
          </span>
          <div className="flex items-center text-base md:text-lg mt-2">
            <img src={StarIcon} className="w-4 md:w-6" alt="Star Icon" />
            <span>50.</span>
            <span className="text-[#918E9B]">({card.reviewCount})</span>
            <span className="text-[#918E9B]">&#8226; {card.reviewCount}</span>
          </div>
          <h2 className="mt-2">{card.title}</h2>
          <p className="mt-2">
            <span className="font-bold">From ${card.price}</span> / person
          </p>
        </div>
      ))}
    </section>
  );
}
