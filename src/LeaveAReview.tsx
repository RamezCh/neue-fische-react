export default function LeaveAReview() {
    return <>
        <h3>Leave a Comment</h3>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/><br/><br/>
            <label htmlFor="comment">Comment:</label><br/>
            <textarea id="comment" name="comment" rows={4} required></textarea><br/><br/>
            <button type="submit">Submit</button>
        </form>
    </>
}