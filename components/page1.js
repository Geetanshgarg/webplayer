import React from 'react'
import { Typewriter } from "react-simple-typewriter";

const Page1 = () => {
    return (
        <div className="flex flex-col">
            <div className="page1 mt-16 flex flex-col justify-center h-[90vh]">
                <div className="p-7   font-extrabold text-8xl text-center items-center h-[18rem] max-w-[screen] text-green-200">
                    <Typewriter
                        words={[
                            "Looking for a web player ",
                            "It hurts to forget time stamp",
                            "right?", "Try WebPlayer"
                        ]}
                        cursor
                        typeSpeed={100}
                        deleteSpeed={80}
                        delaySpeed={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default Page1;