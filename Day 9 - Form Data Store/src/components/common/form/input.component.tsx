import { INPUT_TYPE, ITextInputComponent } from "./input.contract"
export const TextInputComponent=({type=INPUT_TYPE.TEXT, name , handleChange , msg}:ITextInputComponent)=>{
    return(
        <>
        <input
          type={type}
          id={name}
          name={name}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
        <span className="text-sm italic text-red-600">{msg}</span>
        </>

    )
}