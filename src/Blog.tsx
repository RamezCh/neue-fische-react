import "./blog.css"
import Hero from "./Hero.tsx";
import List from "./List.tsx";
import MoreInfo from "./MoreInfo.tsx";
import LeaveAReview from "./LeaveAReview.tsx";

const moonAdv = {
    title: "Reasons to Admire the Moon",
    advantages: ["It influences the tides.", "It has inspired countless myths and legends.", "It provides a guiding light in the night sky."]
}

const moreInfo = {
    text: "For more stunning images of the moon and sky, visit",
    visitLink: "https://www.nasa.gov/",
    aText: "nasa",
    quote: "“The moon is a friend for the lonesome to talk to.” – Carl Sandburg"

}

export default function Blog() {
    return <>
        <Hero title="Welcome to the Sky and Moon Blog"
        subtitle="Exploring the beauty of the night sky and the mysteries of the moon."
        secondTitle="The Enchanting Moon"
        imgSrc="https://media.istockphoto.com/id/1465441739/photo/romantic-night-scene.jpg?s=612x612&w=0&k=20&c=gt2thGqqfyvlEd4BkvFfG7ca8Jq_rUeFZhTg_bOh6cU="
        imgAlt="Beautiful Moon"
        text="The moon has fascinated humanity for centuries. Its phases, its glow, and its presence in the night sky
        create a sense of wonder."
        />
        <List {...moonAdv} />
        <MoreInfo {...moreInfo}/>
        <LeaveAReview/>
    </>
}