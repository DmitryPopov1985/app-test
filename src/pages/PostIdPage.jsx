import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'

export default function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
  return (
    <div style={{textAlign:'center'}}>
        <h1>Вы перешли на страницу поста {params.id}</h1>
        {isLoading
            ? <Loader/>
            : <div>
                <h3>{post.id}. {post.title}</h3>
                <div>{post.body}</div>
            </div>
        }
        <div>
            <h2 style={{marginTop:30}}>Комментарии</h2>
            {isCommentsLoading 
               ? <Loader/>
               : <div>
                {comments.map(comm => 
                
                    <div style={{marginTop:15}} key={comm.id}>
                        <h4>{comm.name}</h4>
                        <p>{comm.body}</p>
                    </div>
                )}
               </div>
             }
        </div>
    </div>
  )
}
