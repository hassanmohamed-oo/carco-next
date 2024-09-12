"use client"
import { SearchManufactorerProps } from '@/types'
import Image from 'next/image'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions ,Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useState } from 'react'
import { manufacturers } from '@/constants'
const SearchManufactorer = ({selected,setselected}:SearchManufactorerProps) => {
    const [query, setquery] = useState('')
    const filteredManufacturer = 
    query ===""?
    manufacturers
    :manufacturers.filter((item)=>(
      item.toLowerCase()
      .replace(/\s+/g,"")
      .includes(query.toLowerCase().replace(/\s+/g,""))
    ))
    
    return (
    <div className='search-manufacturer'>
        <Combobox value={selected} onChange={setselected}>
            <div className='relative w-full'>
                <ComboboxButton  className='absolute top-[14px]'>
                    <Image src='/car-logo.svg' alt='Car Logo' width={20} height={20} className='ml-4'/>
                </ComboboxButton>
                <ComboboxInput
                    className='search-manufacturer__input'
                    placeholder='Volkeswagen'
                    displayValue={(manufactorer:string)=>manufactorer}
                    onChange={(e)=> setquery(e.target.value)}
                />
                <Transition
                as={Fragment}
                leave="Transition ease-in durration-100 "
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={()=> setquery('')}
                >
                    <ComboboxOptions >
                        {filteredManufacturer.map((item)=>(
                            <ComboboxOption
                              key={item}
                              value={item}
                              className={({active})=>
                              `relative search-manufacturer__option
                            ${active? 'bg-primary-blue text-white':'text-gray-900'}`}
                            >
                                 {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Transition>

            </div>
</Combobox>
        


    </div>
  )
}

export default SearchManufactorer

