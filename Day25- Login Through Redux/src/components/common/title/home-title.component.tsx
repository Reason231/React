import { Heading1 } from "../typography/typography.component"

export interface HomePageTitleProps {
    title:string,
        url:string | null | undefined
}
export const HomePageTitle=({title,url}:HomePageTitleProps) =>{
    return(
        <>
        <div className="flex justify-between lg:ml-6 mt-8 border-b border-solid border-gray-400 p-3">
        <Heading1>{title}</Heading1>
        { url ? <>
          <a href={url}
          className="text-teal-800 text-xl font-bold mt-1 hover:cursor-pointer hover:text-red-400"
          >
          View All &rarr;
        </a>
          </> : <></>
}
      </div>
        </>
    )
}