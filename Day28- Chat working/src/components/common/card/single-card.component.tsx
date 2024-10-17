import {Card} from "flowbite-react"

export interface CardWihtImageProps{
    image:string,
    title:string,
    url:string
}
export const CardWithImage =({image,title,url}:any)=>{
    return(
        <>
        <div>

         <Card
        className="lg:w-[25vh] hover:scale-105 transition ease-in-out hover:shadow-2xl"
        imgAlt={title}
        imgSrc={image}
        >
            <div className="lg:mt-[-3vh] lg:ml-2 lg:flex w-[32vw]">

          <a href={url} className="font-semibold lg:ml-[-2vw]">
            {title}
            </a>
            </div>
        </Card>
            </div>
        </>
    )
}
