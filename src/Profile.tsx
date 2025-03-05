type ContentProps = {
    name: string
    introduction: string
}

export default function Profile(props:ContentProps) {
    return <>
        <h1>Hello! I am {props.name}.</h1>
        <p>{props.introduction}</p>
    </>
}