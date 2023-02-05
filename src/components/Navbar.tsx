import { useWindowWidth, windowSize } from "@/common/hooks/window";

interface NavbarProps {
   arg ?: string
}

interface LinkProps {
   children: any
}

function Link(props: LinkProps) {
   const linkStyle = `text-white/80 group-hover:text-white transition ease-in-out duration-300 translate`
   return (
      <div className="group">
         <h1 className={linkStyle}> {props.children} </h1>
         <div className="w-0 h-0 group-hover:h-1 group-hover:w-full bg-white transition-all duration-300 ease-in-out"></div>
      </div>

   )
}



export default function Navbar(props: NavbarProps) {
  const windowWidth = useWindowWidth();

  return (
    <>
      <div className={`w-screen min-h-fit h-20 px-4 sm:px-16 lg:px-60" mx-auto flex flex-row items-center justify-center bg-gray-900/40`}>
        {/* Logo and title */}
        <div className="">
          <h1 className="text-3xl text-white font-navbar-header font-semibold w-full flex-1 flex-nowrap">
            IEEE <span className="text-yellow-300"> CS </span> MUJ
          </h1>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-row justify-end items-center md:space-x-10 text-xl font-navbar-link">
          {windowWidth && windowWidth > windowSize['xl'] ? (
            <>
              {/* <h1 className={linkStyle}> Home </h1> */}
              <Link> Home </Link>
              <Link> Events </Link>
              <Link> Blogs </Link>
              <Link> Team </Link>
              <Link> Contact Us </Link>

              <button className="btn btn-lg btn-outline btn-warning"> Genesis </button>
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </div>
    </>
  );
}
