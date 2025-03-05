type ContentType = {
    text:string
    visitLink:string
    aText:string
    quote:string
}

export default function MoreInfo(props:ContentType) {
    return <>
        <p>{props.text} <a href={props.visitLink} target="_blank">{props.aText}</a>.</p>
        <blockquote>{props.quote}</blockquote>
    </>
}