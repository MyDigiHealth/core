interface AuthTypeSelectionProps {
  setType: React.Dispatch<React.SetStateAction<number>>;
}

const types = [
  {
    type: 0,
    title: "User or Patient",
    imageUrl: "/images/patient-representation.png",
  },
  {
    type: 1,
    title: "Medical Professional",
    imageUrl: "/images/doctor-representation.png",
  },
  {
    type: 2,
    title: "Pharmacy Owner",
    imageUrl: "/images/shop-representation.png",
  },
];

export default function AuthTypeSelection(props: AuthTypeSelectionProps) {
  return (
    <div className="flex flex-col gap-y-5 items-center mt-10">
      <h1 className="font-raleway font-bold text-4xl">You are a...</h1>
      <div className="flex flex-col gap-y-8">
        {types.map((type, i) => (
          <button
            key={i}
            onClick={() => {
              props.setType(type.type);
            }}
            className="bg-front bg-opacity-10 rounded-[2.5rem] flex items-center overflow-hidden group animate-[grow_800ms]"
          >
            <img
              src={type.imageUrl}
              alt={type.title}
              draggable={false}
              className="w-40 aspect-square saturate-0 duration-500 group-hover:saturate-100"
            />
            <p className="pl-4 pr-8 text-2xl font-raleway group-hover:text-primary">
              {type.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
