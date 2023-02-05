import { useEffect, useState } from "react";


export function useWindowWidth() {
   let [width, setWidth] = useState<number>(0);

   useEffect( () => {
      setWidth(window.innerWidth);

      window.addEventListener("resize", (event: Event) => {
         setWidth(window.innerWidth);
      });
   }, [])

   return width !== 0 ? width : 0;
}

export function useWindowHeight() {
   let [height, setHeight] = useState<number>(0);

   useEffect(() => {
      setHeight(window.innerHeight);

      window.addEventListener("resize", (event: Event) => {
         setHeight(window.innerHeight);
      });
   }, [])

   return height;
}

// The following sizes are in pixels
export const windowSize = {
   'sm': 640,
   'md': 768,
   'lg': 1024,
   'xl': 1280,
   '2xl': 1536
}