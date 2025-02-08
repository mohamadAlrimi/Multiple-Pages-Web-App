import { Link } from "react-router-dom"
import { postsContext } from "./context/postsContext"
import { useContext } from "react"

export default function PostsList(){
    const posts = useContext(postsContext)
    let postsList = posts.map((post)=>{
        return(  <Link  key={post.id} to= {`/PostDetails/${post.id}`} > <div  style={{background:"orange" ,padding:"20px", marginTop:"10px"}}><h1>{post.title}</h1></div> </Link> )
    })
    return(
    <div>
     {postsList}
    </div>
    )
}