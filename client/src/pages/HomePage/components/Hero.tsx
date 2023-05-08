import HeroIsometricVisual from "./HeroIsometricVisual";

export default function Hero() {
  return (
    <section className="h-screen pl-page py-12 flex items-center">
      <div className="flex-1">w</div>
      <div className="basis-[60%] h-full flex flex-col justify-center">
        <HeroIsometricVisual />
      </div>
    </section>
  );
}
