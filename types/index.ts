import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}
export interface SearchManufactorerProps {
    selected:string,
    setselected:(manufactorer:string)=>void
}
export interface SearchBarProps {
    
    setmanufactorer:(manufactorer:string)=>void
    setmodel:(model:string)=>void
}
export interface carProps {
    city_mpg:number
    class:string
    combination_mpg:number
    cylinders:number
    displacement:number
    drive:string
    fuel_type:string
    highway_mpg:number
    make:string
    model:string
    transmission:string
    year:number
}
export interface filterProps{
    manufactorer:string
    year:number
    fuel:string
    limit:number
    model:string
}
export interface HomeProps {
  searchParams: filterProps;
}
export interface OptionsProps{
    title:string
    value:string
}
export interface CustomFilterProps{
    title:string
    options:OptionsProps[]
    setFilter:(Filter:any)=>void
}
export interface showMoreProps{
    setlimit:(limit:number)=>void
    pageNumber:number
    isNext:boolean
}