"use client"
import { showMoreProps } from "@/types"
import CustomBotton from "./CustomBotton";


const ShoeMore = ({pageNumber,isNext,setlimit}:showMoreProps) => {
  
  const handleNavigation =()=>{
    const newLimit =(pageNumber+1)*10;
    setlimit(newLimit)
  }

    return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext&&(
            <CustomBotton
            title="Show More"
            btnType="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleNavigation}
            />
        )

        }
    </div>
  )
}

export default ShoeMore