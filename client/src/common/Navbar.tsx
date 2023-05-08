const navItems = [
  {
    title: "",
    to: "",
  },
];

export default function Navbar() {
  return (
    <nav className="p-page flex py-3 justify-between">
      <div className="flex gap-x-2 items-center">
        <img
          src="/logo.png"
          alt="myDigiHealth logo"
          className="aspect-square h-16"
        />
        <h1 className="text-2xl text-primary font-semibold">myDigiHealth</h1>
      </div>
      <div className="flex gap-x-5"></div>
    </nav>
  );
}
