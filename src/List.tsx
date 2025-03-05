type ContentProps = {
    title:string
    advantages:string[]
}

export default function List(props: ContentProps) {
    return <>
        <h3>{props.title}</h3>
        <ul>
            {props.advantages.map((sentence) => <li>{sentence}</li>)}
        </ul>
    </>
}