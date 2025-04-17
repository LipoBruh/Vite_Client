import React from 'react'
import Die from './Die'
import { FaRegWindowMinimize } from "react-icons/fa";
import { useState } from 'react';

export default function Footer() {

    const [toggle, setToggle] = useState(true);

    function click(){
        setToggle(!toggle)
    }

    function render(){
        let array = [4,6,8,10,12,20,100]


        return array.map((value,key)=>{
            return <div className={'flex-grow flex-1/'+array.length} key={key}><Die key={key} die={value} /></div>
        })
    }

    let components = render() 

    return (
        <>
        <div className='bottom-0 left-0 right-0 z-50 max-w-screen fixed max-h-[10%]'>
            <div className='flex flex-row max-w-screen bg-blue-950 h-[5px] hover:bg-gradient-to-r hover:from-indigo-500 group focus:via-purple-500 hover:to-pink-500' onClick={()=>click()}></div>
            <div className={"flex flex-row flex-nowrap justify-between bg-blue-900 h-[50%]"+(toggle?"":" hidden")} >
                {components}
            </div>
        </div>
        </>
    )
}
