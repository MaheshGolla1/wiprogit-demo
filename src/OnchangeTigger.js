import React,{useState} from 'react';
function OnchangeTigger(){
    const [name,setName]=useState("Guest");
    const [Quantity,setQuantity]=useState(1);
    const [comment,setcomment]=useState("");
    const [payments,setpayment]=useState();
    const [shipping,setshipping] = useState("Delivery");

    function handleName(event){
        setName(event.target.value);
    }

    function handleQuality(event){
        setQuantity(event.target.value);
    }
    function handleComment(event){
        setcomment(event.target.value);
    }

    function handlepayment(event){
        setpayment(event.target.value);
    }
    function handleshipping(event){
        setshipping(event.target.value);
    }


    return(
        <>
            <input value={name} onChange={handleName}/>
            <p>Name:{name}</p>

            <input value={Quantity} onChange={handleQuality} type="number" />
            <p> Quantity:{Quantity}</p>

            <textarea value={comment} onChange={handleComment}
                      placeholder="enter delivery "/>
            <p> Comment:{comment}</p>


            <select value={payments} onChange={handlepayment}>
                <option value=" "> Select an Option</option>
                <option value="visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>

            </select>
            <p>Payment : {payments}</p>
            <label>
                <input type="radio" value="pick up"
                       checked={shipping === "pick up"}
                       onChange={handleshipping} />
                pick up
            </label>
            <label>
                <input type="radio" value="Delivery"
                       checked={shipping === "Delivery"}
                       onChange={handleshipping} />
                Delivery
            </label>

            <p>Shipping:{shipping}</p>


        </>

    );


}
export default OnchangeTigger;