import "./blog.css"
import Hero from "./Hero.tsx";
import List from "./List.tsx";
import MoreInfo from "./MoreInfo.tsx";
import LeaveAReview from "./LeaveAReview.tsx";

const moonAdv = {
    title: "Reasons to Admire the Moon",
    advantages: ["It influences the tides.", "It has inspired countless myths and legends.", "It provides a guiding light in the night sky."]
}

export default function Blog() {
    return <>
        <Hero/>
        <List {...moonAdv} />
        <MoreInfo/>
        <LeaveAReview/>
    </>
}