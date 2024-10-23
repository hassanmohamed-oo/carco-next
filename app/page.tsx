"use client"
import { Hero,ShoeMore } from "@/components";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import CarCard from "@/components/CarCard";
import { fetchCars } from "@/utils";
import { filterProps, HomeProps } from "@/types";
import { fuels,yearsOfProduction } from "@/constants";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home(/*{searchParams}:HomeProps*/) {
  
    const [allCars, setallCars] = useState([])
  const [Loading, setLoading] = useState(false)
  const [manufactorer, setmanufactorer] = useState("")
  const [model, setmodel] = useState("")
  const [fuel, setfuel] = useState("")
  const [year, setyear] = useState(2022)
  const [limit, setlimit] = useState(10)

  const getCars = async()=>{
    setLoading(true)
    try {
    const result =await fetchCars({
    manufactorer:manufactorer ||'',
    year:year ||2022,
    fuel:fuel ||'',
    limit:limit ||10,
    model:model ||''
  });
  setallCars(result);
    
  }catch (error) {
    console.log(error)
  } finally{
    setLoading(false)
  }
  }

  useEffect(()=>{
    getCars();
  },[fuel,year,limit,manufactorer,model])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    
    <main className="overflow-hidden">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar
          setmanufactorer={setmanufactorer}
          setmodel={setmodel}
          />

          <div className="home__filter-container">
            <CustomFilter setFilter={setfuel} title="fuel" options={fuels}/>
            <CustomFilter setFilter={setyear} title='year' options={yearsOfProduction}/>
          </div>

        </div>
        {allCars.length>0?
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car) => (
                <CarCard car={car}/>
              ))}
            </div>
            {Loading&&(
              <div className="mt-16 w-full flex-center">
                <Image
                src="/loader.svg"
                alt="loader"
                width={50}
                height={50}
                className="object-contain"
                />
              </div>
            )}
            <ShoeMore
            pageNumber={limit/10}
            isNext={limit >allCars.length}
            setlimit= {setlimit}
            />
          </section>
            :
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          </div>  
        }
        

      </div>
    </main>
  );
}
