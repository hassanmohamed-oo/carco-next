"use client"
import React from 'react'
import SearchManufactorer from './SearchManufactorer'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const SearchButton=({otherclasses}:{otherclasses:string})=>(
      <button type='submit' className={`ml-3 z-10 ${otherclasses}`}>
        <Image src="/magnifying-glass.svg" alt='serach icon' width={40} height={40} className='object-contain'/>
      </button>
    )
const SearchBar = ({setmanufactorer,setmodel}) => {
    const [searchmodel, setsearchmodel] = useState('')
    const [searchmanufactorer, setsearchmanufactorer]=useState('');
    const router =useRouter();
    const handlesearch =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(searchmanufactorer.trim()===''&&searchmodel.trim()===''){
          return alert('please fill in the search bar')

        }
        setmodel(searchmodel)
        setmanufactorer(searchmanufactorer)

    }

  return (
    <form className='searchbar' onSubmit={handlesearch}>
        <div className="searchbar__item">
            <SearchManufactorer
            selected={searchmanufactorer}
            setselected={setsearchmanufactorer}
            />
            <SearchButton otherclasses='sm:hidden'/>
        </div>
        <div className='searchbar__item'>
          <Image src="/model-icon.png"
          width={25}
          height={25}
          alt='car model'
          className="absolute w-[20px] h-[20px] ml-4"
          />
          <input type="text" name='model' value={searchmodel} onChange={(e)=>setsearchmodel(e.target.value)} placeholder='Tiguan' className='searchbar__input'/>
          <SearchButton otherclasses='sm:hidden'/>
        </div>
          <SearchButton otherclasses='max-sm:hidden'/>

    </form>
  )
}

export default SearchBar