import maheshImg from './images/mahesh.jpeg';

function Card() {

    return (
        <div className="Card1">
            <div className="te1"><h1>Bro Code</h1></div>
            <div className="te2">  <img  className="image" src={maheshImg} alt="Mahesh"  /></div>

        </div>
    );
}
export default Card;
