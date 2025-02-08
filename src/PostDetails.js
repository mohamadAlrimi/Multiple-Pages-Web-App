import { useParams } from "react-router-dom"
import { useContext } from "react";
import { postsContext } from "./context/postsContext";
export default function PostDetails() {
    const posts = useContext(postsContext);
const {postId} = useParams();
const post = posts.find((p) => {
return p.id == postId ;
})


    console.log(post)
    return(<>
    <h1>post details</h1>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </>)
}