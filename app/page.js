"use client";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="flex flex-col bg-teal-500">
        <div className="page1 flex flex-col justify-center ">
        <div className="p-7 font-extrabold text-8xl text-center items-center h-[18rem] max-w-[screen] text-green-200">
          <Typewriter
            words={[
              "Looking for a web player ",
              "It hurts to forget time stamp",
              "right?","Try WebPlayer"
            ]}
            cursor
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={500}
          />
        </div>
        <div className=" flex flex-col items-center rounded-xl bg-emerald-600 h-screen ml-8 mr-8">
          <div className="tag1 float-start "></div>
        </div>
      </div>
    </main>
  );
}
