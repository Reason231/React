import { Card } from "flowbite-react";
export const SingleProductComponent=()=>{
    return(
        <>
              
        <Card
          className="lg:w-[25vh] hover:scale-105 transition ease-in-out hover:shadow-2xl"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://static-01.daraz.com.np/p/36cfdbf067af059393fd10c8d391319f.png_300x0q75.webp"
        >
          <div className="lg:mt-[-3vh] lg:ml-2 lg:flex w-[30vw] flex-wrap">
          <h5 className="font-semibold lg:ml-[-2vw]">
            Smart Watch
          </h5>

        <div className="mt-12">

        <span className="font-semibold lg:ml-[-8.2vw]">$599</span>
        <a
          href="#"
          className="rounded-lg  bg-cyan-600 ml-1 px-3 py-[15%] text-center text-sm font-medium text-white hover:bg-cyan-900 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
          Add to cart
        </a>
            </div>
          </div>
        </Card>

               </>
    )
}