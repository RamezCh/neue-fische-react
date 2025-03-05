type ContentType = {
    title:string
    subtitle:string
    secondTitle:string
    imgSrc:string
    imgAlt:string
    text:string
}

export default function Hero(props:ContentType) {
    return <>
        <h1>{props.title}</h1>
        <p> {props.subtitle} </p>

        <h2>{props.secondTitle}</h2>
        <img
            src={props.imgSrc}
            alt={props.imgAlt}/>
        <p>{props.text}</p>
    </>
}