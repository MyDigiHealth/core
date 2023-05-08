import { useState } from "react";
import AuthTypeSelection from "./components/AuthTypeSelection";

export default function AuthPage() {
  const [type, setType] = useState(-1);

  return (
    <>
      <section className="flex h-screen">
        <div className="basis-1/2 h-full flex flex-col justify-center">
          <img
            src="/images/documents-stash.webp"
            alt="docs"
            draggable={false}
            className="drop-shadow-lg w-full"
          />
        </div>
        <div className="basis-1/2 h-full flex flex-col justify-center">
          {type === -1 ? <AuthTypeSelection setType={setType} /> : <></>}
        </div>
      </section>
    </>
  );
}
