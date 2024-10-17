import { BaseSyntheticEvent } from "react"

export enum INPUT_TYPE{
    TEXT="text",
    NUMBER= "number",
    EMAIL= "email",
    PASSWORD= "password",
    ADDRESS="address"
}

export type handleChangeType= (e:BaseSyntheticEvent) =>{}
export interface ITextInputComponent{
    type?: INPUT_TYPE,     // here the type value can be any like it can be text, number , email or pw
    name: string,
    handleChange:handleChangeType,
    msg?:string | undefined | null
}
