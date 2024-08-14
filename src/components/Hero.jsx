import experiencesGrid from "/photo-grid.png";

export default function Hero() {
  return (
    <section className="w-full px-6 sm:px-10 md:px-20">
      <div className="flex justify-center">
        <img
          src={experiencesGrid}
          className="w-full sm:w-full md:w-full lg:w-2/3 py-10"
          alt="Experience Grid"
        />
      </div>
      <div className="text-left">
        <h1 className="font-semibold text-4xl">Online Experiences</h1>
        <p className="font-light text-base md:text-2xl pt-3 md:w-[28rem]">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
