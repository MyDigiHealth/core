interface AuthFormProps {
  type: number;
  back_callback: Function;
}

export default function AuthForm(props: AuthFormProps) {
  const inputFields = [
    {
      title: ["Your Name", "Your Registered Name", "Shop's Name"][props.type],
      type: "text",
    },
    {
      title: ["Date of Birth", "Date of Registration", null][props.type],
      type: "date",
    },
    {
      title: [
        "Aadhar Number",
        "Medical ID Number",
        "Business Registration Number",
      ][props.type],
      type: "text",
    },
    {
      title: [
        "Aadhar Card",
        "Medical Certificate",
        "Business Establishment Proof",
      ][props.type],
      type: "file",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-y-6 p-page">
      {inputFields.map((item, i) => (
        <div className="w-full flex flex-col gap-y-2 items-center animate-[grow_500ms]">
          {item.title && (
            <>
              <p className="text-center font-raleway text-lg font-medium">
                {item.title}
              </p>
              <input
                type={item.type}
                className="border p-3 w-3/4 rounded-lg border-front border-opacity-70"
                accept="application/pdf,image/jpeg,image/gif,image/png,image/x-eps"
              />
            </>
          )}{" "}
        </div>
      ))}
      <div className="flex my-4 justify-evenly w-full">
        <button
          className="flex items-center gap-x-1 border rounded-lg border-primary text-primary px-8 py-3 animate-[grow_400ms]"
          onClick={() => {
            props.back_callback();
          }}
        >
          <span className="material-icons">&#xe2ea;</span> Back
        </button>
        <button className="flex items-center gap-x-2 btn-1 px-8 py-3 rounded-lg animate-[grow_400ms]">
          Submit
          <span className="material-icons">&#xe163;</span>
        </button>
      </div>
    </div>
  );
}
