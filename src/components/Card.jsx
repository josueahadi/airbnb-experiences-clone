import StarIcon from "/star.png";

export default function Card(props) {
  return (
    <div className="flex flex-none flex-col relative w-44 md:w-60">
      <img src={props.img} className="w-full rounded-xl" alt={props.title} />
      {props.isSoldOut && (
        <span className="uppercase text-[#222222] bg-[#FFFFFF] rounded-md px-2 py-1 absolute top-3 left-3">
          Sold Out
        </span>
      )}
      <div className="flex items-center space-x-1 text-base md:text-lg mt-2">
        <img src={StarIcon} className="w-4 md:w-6" alt="Star Icon" />
        <span>{props.rating}</span>
        <span className="text-[#918E9B]">({props.reviewCount})</span>
        <span className="text-[#918E9B]">&#8226; {props.location}</span>
      </div>
      <h2 className="mt-2">{props.title}</h2>
      <p className="mt-2">
        <span className="font-bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
