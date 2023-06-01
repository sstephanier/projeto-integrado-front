import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { BASE_URL } from '../../constants/url'
import { ContainerComment, ButtonBoss, Button, Button2 } from './CommentsStyle'
import Like from '../../assets/upVote.png'
import Dislike from '../../assets/downVote.png'
import Comment from '../../assets/comment.png'
import { goToLogin } from '../../router/coordinates'
import Line from '../../assets/barraColorida.png'
import bar from '../../assets/barraPreta.png'

const Comments = () => {

  const [postId, setPostId] = useState([])
  const [commentContent, setCommentContent] = useState("")
  const [dataComment, setDataComment] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  const token = window.localStorage.getItem('token')

  const createContent = {
    "content": commentContent
  }

  const getPostById = () => {

    axios.get(`${BASE_URL}/posts/${id}`, {
      headers: {
        'Authorization': token
      }
    })
      .then((res) => {
        console.log(res)
        setPostId(res.data)
      })
      .catch((err) => {
        console.log(err)

      })
  }

  const likeOrDislike = async (id, like) => {
    try {
      await axios.put(`${BASE_URL}/posts/${id}/like`, { like }, {
        headers: { Authorization: token }
      });

      getPostById();

    } catch (error) {
      console.log(error);
    }
  }

  const createComments = async () => {
    if (commentContent.trim() === "") {
      alert('Por favor, adicione um comentário válido.')
      return
    }
    try {
      await axios.post(`${BASE_URL}/comments/${id}`, createContent, {
        headers: {
          Authorization: token
        }
      })

      window.location.reload()

    } catch (error) {
      console.log(error)
    }
  }

  const getCommentsByPostId = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/comments/post/${id}`, {
        headers: {
          "Authorization": token
        }
      })

      console.log(response.data)
      setDataComment(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  const likeOrDislikeComments = async (id, like) => {
    try {
      await axios.put(`${BASE_URL}/comments/${id}/like`, { like }, {
        headers: { Authorization: token }
      });

      getCommentsByPostId();

    } catch (error) {
      console(error)
    }
  }

  useEffect(() => {
    if (!token) {
      goToLogin(navigate)
    }
    getPostById()
    getCommentsByPostId()

  }, [])


  console.log("data comment aqui", dataComment)
  return (
    <ContainerComment>
      <Header />
      <div className='card'>
        <div className='content'>
          <h1>Enviado por: {postId.name}</h1>
          <h2>{postId.content}</h2>

          <div className='buttons'>
            <Button2 onClick={() => likeOrDislike(postId.id, true)}><img src={Like} alt='imagem para likes'></img>{postId.likes}</Button2>
            <Button2 onClick={() => likeOrDislike(postId.id, false)}><img src={Dislike} alt='imagem para dislikes'></img>{postId.dislikes}</Button2>
            <Button2><img src={Comment} alt='imagem para comments'></img>{postId.comments}</Button2>
          </div>
        </div>
      </div>
      <textarea
        placeholder='Adicionar comentário...'
        type="text"
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}></textarea>

      <ButtonBoss>
        <Button onClick={createComments}>Responder</Button>
        <img className='line' src={Line} alt='Linha de separação'></img>
      </ButtonBoss>

      {dataComment.map((data) => {
        return (
          <div className='card' key={data.id}>
            <div className='content'>
              <h1>Enviado por: {data.creatorNickName}</h1>
              <h2>{data.comment}</h2>
              <div className='buttons'>
                <Button2 onClick={() => likeOrDislikeComments(data.id, true)}><img src={Like} alt='imagem para likes'></img>{data.likes}</Button2>
                <Button2 onClick={() => likeOrDislikeComments(data.id, false)}><img src={Dislike} alt='imagem para dislikes'></img>{data.dislikes}</Button2>
              </div>
            </div>
          </div>
        )
      }).reverse()}

      <img className='bar' src={bar}></img>

    </ContainerComment>
  )
}

export default Comments