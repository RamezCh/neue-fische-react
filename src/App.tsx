import Blog from "./Blog.tsx";
import Profile from "./Profile.tsx";

const me = {
    name: "Ramez",
    introduction: "A Software Engineer with various knowledge from AI to Frontend to Backend and even DevOps! What is more amazing? That I am a fresh graduate and have accumulated a large amount of knowledge in a short amount of time."
}

export default function App(){
    return <div className={"container"}>
        <Profile {...me} />
        <Blog/>
    </div>;
}
