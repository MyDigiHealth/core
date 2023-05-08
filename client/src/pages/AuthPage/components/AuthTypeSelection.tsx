interface AuthTypeSelectionProps {
  setType: React.Dispatch<React.SetStateAction<number>>;
}

const types = [
  {
    title: "User or Patient",
    imageUrl: "/images/patient-representation.png",
  },
  {
    title: "Medical Professional",
    imageUrl: "/images/doctor-representation.png",
  },
  {
    title: "Medical Shop Owner",
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
            className="bg-front bg-opacity-10 rounded-[2.5rem] flex items-center overflow-hidden group"
          >
            <img
              src={type.imageUrl}
              alt=""
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
