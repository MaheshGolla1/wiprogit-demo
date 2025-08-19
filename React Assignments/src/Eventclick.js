import maheshImg from './images/mahesh.jpeg';

function Eventclick() {
    const handleclick = (event) => {
        event.target.style.display = "none";
    };
    return (
        <div className="Card1">
            <div className="te1"><h1>Bro Code</h1></div>
            <div className="te2">  <img  className="image" src={maheshImg} alt="Mahesh"  onClick={handleclick} /></div>

        </div>
    );
}
export default Eventclick;
