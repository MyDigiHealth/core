interface AuthTypeSelectionProps {
  setType: React.Dispatch<React.SetStateAction<number>>;
}

export default function AuthTypeSelection(props: AuthTypeSelectionProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-raleway font-bold text-4xl">You are a...</h1>
    </div>
  );
}
