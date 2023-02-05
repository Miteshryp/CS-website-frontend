interface ButtonProps {
   width ?: string,
   height ?: string,
   bgColor ?: string,
   bgHoverColor ?: string,

   textSize ?: string,
   textColor ?: string,

   children: any

}


export default function Button(props: ButtonProps) {

   const buttonWidth = props.width ? props.width : '3rem';
   const buttonHeight = props.height ? props.height : '1.2rem';

   return (
      <div 
            className={`flex justify-center items-center py-6 px-12 rounded-md
                        transition-all ease-in-out bg-white hover:scale-x-110`}
            style={{
               width: buttonWidth,
               height: buttonHeight,
               color: props.textColor,
               fontSize: props.textSize,
            }}
         >
            {props.children}
         </div>
   )
}