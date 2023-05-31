import About from "../components/about";
import Portfolio from "../components/portfolio";
import Talk from "../components/talk";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="App font-sans bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-100">
      <header className="flex sticky top-0 z-50 space-x-1 w-full h-20 flex-row-reverse pr-20 pt-10">
        <nav className="nav__container__actions">
          <ul className="flex gap-6 text-lg font-semibold cursor-not-allowed hover:cursor-pointer">
            <li>
              <Link
                className="no-underline hover:underline"
                activeClass="active font-bold"
                smooth
                spy
                to="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="no-underline hover:underline "
                activeClass="active font-bold"
                smooth
                spy
                to="About"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="no-underline hover:underline "
                activeClass="active font-bold"
                smooth
                spy
                to="Portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="no-underline hover:underline "
                activeClass="active font-bold"
                smooth
                spy
                to="Talk"
              >
                Let's Talk!
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex flex-col px-20 mt-10">
        <div
          id="Home"
          className=" w-full h-[600px] rounded-3xl shadow-xl
          text-3xl font-bold bg-slate-100"
        ></div>
        <About />
        <Portfolio />
        <Talk />
      </div>
    </div>
  );
}
