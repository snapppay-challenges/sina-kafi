import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white flex items-center justify-between z-10">
      <nav className="max-w-7xl w-full flex items-center justify-between px-4 mx-auto">
        <div className="flex gap-4">
          <Link
            to="/"
            aria-label="Go to contact List"
            className="hover:!text-blue-400 focus:outline-none focus:ring-blue-500"
          >
            Contact List
          </Link>
        </div>
        <a
          href="https://snapppay.ir/"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to snap pay website"
        >
          <img
            src="/pwa/apple-114.png"
            width={60}
            height={60}
            alt="snappay logo"
            className="rounded-full block"
            loading="lazy"
            style={{ display: "block" }}
          />
        </a>
      </nav>
    </header>
  );
};

export default Header;
