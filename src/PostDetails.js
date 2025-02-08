import { useParams } from "react-router-dom"
export default function PostDetails ({title ,body}){
    const {postId} = useParams();
    console.log(postId)
    return(<>
    <h1>post details</h1>
    <h1>{title}</h1>
    <p>{body}</p>
    </>)
}