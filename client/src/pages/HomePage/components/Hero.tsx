import HeroIsometricVisual from "./HeroIsometricVisual";

export default function Hero() {
  return (
    <section className="h-screen pl-page py-12 relative flex items-center overflow-x-hidden">
      <div className="flex-1 flex flex-col gap-y-8">
        <h1 className="font-semibold text-4xl text-primary">
          Blockchain based medical and pharma fraud prevention
        </h1>
        <p className="text-lg font-medium">
          We aim to use the power of blockchain to prevent medical and
          pharmaceutical fraud. With our secure and transparent platform, you
          can ensure that prescriptions are authentic and used as intended,
          improving patient safety and protecting civilians from abuse.
        </p>
        <div className="">
          <button
            className="bg-background flex items-center gap-x-2 relative px-6 py-3 rounded-full duration-500 text-lg text-primary hover:before:-m-[8px] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary before:to-pink-500 before:-z-[1] before:-m-[5px] before:animate-[hue-rotation_3000ms_linear_0ms_infinite] before:rounded-inherit before:duration-inherit"
            onClick={() => {
              window.open("https://www.youtube.com", "__blank_");
            }}
          >
            <span className="material-icons text-3xl">&#xe1c4;</span> Witness a
            revolution
          </button>
        </div>
      </div>
      <div className="basis-[55%] translate-x-10 h-full flex flex-col justify-center">
        <HeroIsometricVisual />
      </div>
    </section>
  );
}
