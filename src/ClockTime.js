import React,{useState,useEffect} from 'react';
function ClockTime(){

    const [time,settime] =useState(new Date());

    useEffect(()=>
        {
            const interval=setInterval( ()=> {settime(new Date())},1000);

            return ()=>
            {
                clearInterval(interval);
            }
        },[]);
    function formate(){
        let hour=time.getHours();
        const mintues=time.getMinutes();
        const seconds=time.getSeconds();

        const meridiem=hour >= 12 ?"PM":"AM";
        hour =hour %12 || 12;
        return `${padzero(hour)}:${padzero(mintues)}:${padzero(seconds)} ${meridiem}`;
    }
    function padzero(number){
      return   (number <10 ?"0":"")+number;
    }
    return(
        <>
            <span>
                {formate()}
            </span><br></br>
        </>
    );



}
export default ClockTime;