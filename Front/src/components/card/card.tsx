import "./card.css"


interface CardProps {
    priority: number,
    image: string,
    name: string
}

export function Card( {priority, image, name} : CardProps){
        console.log("Imagem:", image);
    return(
        
        <>
        <div className="card">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p><b>Priority: {priority}</b></p>
        </div>
        </>
    );
}

export default Card;