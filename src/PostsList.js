import { Link } from "react-router-dom"
let posts = [
    {
        id : 1,
        title:"Hello World",
        body :"this is for the first post"
    } ,
    {
        id : 2,
        title:"Hello World second",
        body :"this is for the second post"
    } ,
    {
        id : 3,
        title:"Hello World third ",
        body :"this is for the third post"
    } 
]
export default function PostsList(){
    let postsList = posts.map((post)=>{
        return(  <Link to= "/postDetails" key={post.id} > <div  style={{background:"orange" ,padding:"20px", marginTop:"10px"}}><h1>{post.title}</h1></div> </Link> )
    })
    return(
    <div>
     {postsList}
    </div>
    )
}