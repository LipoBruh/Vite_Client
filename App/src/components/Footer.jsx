import React from 'react'
import Die from './Die'
import { FaRegWindowMinimize } from "react-icons/fa";
export default function Footer() {


    function render(){
        let array = [4,6,8,10,12,20,100]


        return array.map((value,key)=>{
            return <div className={'flex-grow flex-1/'+array.length} key={key}><Die key={key} die={value} /></div>
        })
    }

    let components = render() 

    return (
        <>
        <div>
            <div className="flex flex-row flex-nowrap justify-between max-w-screen fixed bottom-0 left-0 right-0 z-50 bg-blue-900 " >
                {components}
            </div>
        </div>
        </>
    )
}
