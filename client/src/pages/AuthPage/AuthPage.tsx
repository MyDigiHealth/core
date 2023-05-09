import { useState } from "react";
import AuthTypeSelection from "./components/AuthTypeSelection";
import AuthForm from "./components/AuthForm";

export default function AuthPage() {
  const [type, setType] = useState(-1); //0 - patient; 1 - doctor; 2 - drug dealer

  return (
    <>
      <section className="flex h-screen">
        <div className="basis-1/2 h-full flex flex-col justify-center">
          <img
            src="/images/documents-stash.webp"
            alt="docs"
            draggable={false}
            className="drop-shadow-lg aspect-square max-h-[80vh] max-w-[80vh]"
          />
        </div>
        <div className="basis-1/2 h-full flex flex-col justify-center">
          {type === -1 ? (
            <AuthTypeSelection setType={setType} />
          ) : (
            <AuthForm
              type={type}
              back_callback={() => {
                setType(-1);
              }}
            />
          )}
        </div>
      </section>
    </>
  );
}
