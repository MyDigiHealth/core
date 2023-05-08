import { useEffect, useState } from "react";

type layersType = { img: string; type: "BG" | "FG" }[];

const layers: layersType = [
  { img: "bg-full", type: "BG" },
  { img: "fg-0", type: "FG" },
  { img: "bg-2", type: "BG" },
  { img: "fg-1", type: "FG" },
  { img: "bg-1", type: "BG" },
  { img: "fg-2", type: "FG" },
  { img: "bg-3", type: "BG" },
  { img: "fg-3", type: "FG" },
  { img: "bg-0", type: "BG" },
];

layers.forEach((i) => (i.img = `/images/hero-city/layers/${i.img}.png`));

const config = {
  bgDuration: 2000,
  fgDuration: 3000,
  bgDelay: 50,
  fgDelayStep: 200,
};

export default function HeroIsometricVisual() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setFlag(true);
    }, 50);
  });

  return (
    <div className="w-full h-full relative overflow-hidden">
      {layers.map((item, index) => (
        <img
          src={item.img}
          className="absolute top-0 left-0"
          style={{
            zIndex: index,
            transitionDuration: `${
              item.type === "BG" ? config.bgDuration : config.fgDuration
            }ms`,
            transitionDelay: `${
              item.type === "FG"
                ? config.bgDuration + 100 + (index + 1) * config.fgDelayStep
                : config.bgDelay
            }ms`,
            transform: flag
              ? "translateX(0%) translateY(0%)"
              : `${
                  item.type === "BG" ? "translateX(100%)" : "translateY(100%)"
                }`,
          }}
        />
      ))}
    </div>
  );
}
