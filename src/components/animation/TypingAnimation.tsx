import { useState } from "react";


export interface TypewritterProps {
  text?: string[];
  size?: string;
  textBg?: string;
  divClassName?: string;
  textClassName?: string;
  cursorClassName?: string;
}

export default function TypeAnimatedText(props: TypewritterProps) {
  const [animationCounter, setAnimationCounter] = useState(0);

  return (
    <div
      className={`w-fit overflow-x-hidden relative inline-flex  ${
        props.divClassName ? props.divClassName : ""
      }`}
    >
      <span
        onAnimationEnd={(e) => {
          // setting animation to none
          e.currentTarget.style.animation = "none";
          // e.currentTarget.style.height = '0'

          const obj = e.currentTarget; // retaining object beyond scope for timeout call

          setTimeout(() => {
            obj.style.animation = ""; // forcing the page to refresh
          }, 10);

          setAnimationCounter((value: number) => value + 1);
        }}
        className={`w-full text inline-flex overflow-x-hidden ${
          props.textClassName ? props.textClassName : ""
        }`}
      >
        {props.text ? props.text[animationCounter % props.text.length] : ""}
      </span>

      {/* <div className={`relative h-full ${props.textBg ? props.textBg : ""}`}> */}
        <span
          className={`
            cursor
            absolute -top-1 right-0 animate-type z-30 inline-flex h-5/6 my-[5px] ${props.cursorClassName}`}
        ></span>
      {/* </div> */}


    </div>
  );
}
