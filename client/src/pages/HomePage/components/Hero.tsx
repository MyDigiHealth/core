import HeroIsometricVisual from "./HeroIsometricVisual";

export default function Hero() {
  return (
    <section className="h-screen pl-page py-12 flex items-center overflow-x-hidden">
      <div className="flex-1 flex flex-col gap-y-5">
        <h1 className="font-semibold text-4xl text-primary">Blockchain based medical and pharma fraud prevention</h1>
        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eveniet, quam totam soluta id est, suscipit excepturi sequi labore voluptatum perferendis incidunt facilis illo distinctio consectetur magni ipsa culpa at nobis voluptatem placeat. Minima.</p>
      </div>
      <div className="basis-[55%] translate-x-10 h-full flex flex-col justify-center">
        <HeroIsometricVisual />
      </div>
    </section>
  );
}
