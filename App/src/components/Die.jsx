import React from 'react'
import { useState } from 'react'
import { useGesture } from '@use-gesture/react';
import { useRef } from 'react';

export default function Die({die=6,img_path=("/d"+die+".png"),gif_path=("/d"+die+".gif"),reset_dice=(()=>{})}) {

    const [qty,setQty] = useState(1)
    const [modifier,setModifier] = useState(0)
    const [result,setResult] = useState(null)
    const [reroll,setReroll] = useState(null)
    /*Mouse events */
    const [hover,setHover] = useState(false)
    /*Keyboard events */
    const [key,setKey] = useState(null)


    /*Constant data*/
    const crit_success = die
    const crit_fail = 1


    function roll_all(){
        roll()
    }


    function roll(){
        /* roll */
        let list = []
        let total = 0
        for(let i=0; i<qty; i++){
            let value = Math.floor(Math.random() * die)+1
            list.push(value)
            total+=value
        }

        /* Results */
        const skill = (die === 20);
        const reroll_value = (skill && reroll) ? reroll : false;
        const skill_check = skill
          ? (reroll_value
              ? (reroll_value === "advantage" ? Math.max(...list) : Math.min(...list))
              : list[0])
          : false;
        
        const critical = (skill_check === crit_fail)
          ? "fail"
          : (skill_check === crit_success)
            ? "success"
            : false;
        
        const result_dict = {
          quantity: qty,
          modifier: modifier,
          dice_list: list,
          max: Math.max(...list),
          min: Math.min(...list),
          total: total,
          skill,
          reroll: reroll_value,
          skill_check,
          critical
        };

        console.log(result_dict)

    }



    function remove_die(){
        if (qty>1){
            console.log("Removing a die")
            setQty(qty-1)
        }
    }

    function add_die(){
        if (qty<100){
            console.log("Adding a die")
            setQty(qty+1)
        }
    }

    function decrease_mod(){
        if (modifier>-30){
            console.log("Decreasing the modifier")
            setModifier(modifier-1)
        }
        else(
            console.log("Min modifier is -30")
        )
    }

    function increase_mod(){
        if (modifier<100){
            console.log("Increasing the modifier")
            setModifier(modifier+1)
        }
        else{
            console.log("Max modifier is +100")
        }
    }



    /* Left click adds or rolls */
    function left_click(){
        /* Regular click = roll */
        console.log(key)
        if(key === null){
            console.log("Rolling...")
            roll_all()
        }
        if(""+key=="ShiftLeft"){
            add_die()
        }
        if(""+key=="ControlLeft"){
            increase_mod()
        }
        if(""+key=="Escape"){
            console.log("Reset the QTY")
            setQty(1)
        }
    }
    /* Right click removes */
    function right_click(){
        /* Regular click = roll */
        console.log(key)
        //
        if(key === null){
            console.log("Reset die")
            setQty(1)
            setModifier(0)
        }
        if(""+key=="ShiftLeft"){
            remove_die()
        }
        if(""+key=="ControlLeft"){
            decrease_mod()
        }
    }

    const DOUBLE_TAP_THRESHOLD = 300; // ms
    const lastTap = useRef(0);
    
    const bind = useGesture({
        onClick: ({ event }) => {
          const now = Date.now();
          const timeSince = now - lastTap.current;
    
          if (timeSince < DOUBLE_TAP_THRESHOLD) {
            console.log('Double tap detected!');
            // 🔥 Do something here on double tap
          }
    
          lastTap.current = now;
        },
      });


    return (

    <div 
    tabIndex="0" 
    className='relative h-[100%] aspect-square m-auto  ' 
    /* Computer commands */ 
    onMouseEnter={()=>(setHover(true))}
    onMouseLeave={()=>(setHover(false))}
    onClick={()=>left_click()} onContextMenu={(e)=>
        {
            e.preventDefault()
            right_click()
        }
    } //click = left, context menu = right
    onKeyDown={(e)=>(setKey(e.code))}
    onKeyUp={(e)=>setKey(null)}
    /* Phone commands */

    >
      {!hover?
      <img {...bind()} src={img_path} alt={"d"+die} className='h-[90%] absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2'></img>:
      <img {...bind()} src={gif_path} alt={"d"+die+"_gif"} className='h-[90%] absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2'></img>}


        <div className={'absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 text-white text-xl font-extrabold select-none '+(hover?"opacity-100 ":"opacity-0 ")}>
            {(modifier>=0)?"+"+modifier:""+modifier}
        </div>

        <div className={'absolute bottom-0 right-0 text-white select-none '+(hover?"opacity-40 ":"opacity-0 ")}>
            x{qty}
        </div>
    </div>
  )
}
