import "./blog.css"
import Hero from "./Hero.tsx";
import List from "./List.tsx";
import MoreInfo from "./MoreInfo.tsx";
import LeaveAReview from "./LeaveAReview.tsx";

export default function Blog() {
    return <>
        <Hero/>
        <List/>
        <MoreInfo/>
        <LeaveAReview/>
    </>
}