import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Team",
    to: "/team",
  },
  {
    title: "Contact",
    to: "/contact",
  },
  {
    title: "Donate",
    to: "/donate",
  },
];

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState<"DOWN" | "UP">("UP");

  useEffect(() => {
    var oldScrollY = window.scrollY;
    window.onscroll = function (e) {
      if (oldScrollY < window.scrollY) {
        setScrollDirection("DOWN");
      } else {
        setScrollDirection("UP");
      }
      oldScrollY = window.scrollY;
    };
  }, []);

  return (
    <nav
      className="p-page bg-background bg-opacity-90 backdrop-blur-sm z-[1001] fixed w-full flex py-3 justify-between duration-[400ms]"
      style={{
        transform: `translateY(${scrollDirection === "DOWN" ? -100 : 0}%)`,
      }}
    >
      <Link to="/" className="flex gap-x-2 items-center">
        <div className="group">
          <img
            src="/logo.png"
            alt="myDigiHealth logo"
            className="aspect-square h-16 group-hover:animate-[bouncy-spin_800ms]"
          />
        </div>
        <h1 className="text-2xl text-primary font-semibold">myDigiHealth</h1>
      </Link>
      <div className="flex gap-x-10 items-center">
        {navItems.map((item) => (
          <Link to={item.to} className="text-front text-opacity-75">
            {item.title}
          </Link>
        ))}
        <Link to="/auth" className="btn-1 px-6 py-2 rounded-full">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
