import airbnbLogo from "../assets/airbnb-logo.png";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="px-6 sm:px-10 md:px-20 py-8 shadow-custom w-full">
        <a href="#" target="_blank">
          <img src={airbnbLogo} className="w-24" alt="Airbnb Logo" />
        </a>
      </nav>
    </header>
  );
}
