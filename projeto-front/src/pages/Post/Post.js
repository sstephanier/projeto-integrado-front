import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { Button, ContainerPost, ButtonBoss, Button2 } from './PostStyle'
import Line from '../../assets/barraColorida.png'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { goToLogin, goToComments } from '../../router/coordinates'
import Like from '../../assets/upVote.png'
import Dislike from '../../assets/downVote.png'
import Comment from '../../assets/comment.png'
import Delete from '../../assets/delete.png'
import bar from '../../assets/barraPreta.png'
import postar from '../../assets/postar.png'

const Post = () => {

  const navigate = useNavigate()
  const [postContent, setPostContent] = useState("")
  const [comments, setComments] = useState([])
  const [dataPost, setDataPost] = useState([])
  const [dataCreate, setDataCreate] = useState([])
  const token = window.localStorage.getItem("token")

  const createContent = {
    "content": postContent
  }

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: token
        }
      })

      console.log(response)
      setDataPost(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  const createPosts = async () => {

    if(postContent.trim() === "") {
      alert("Por favor, adicione uma postagem válida.")
      return
    }
    try {
      const response = await axios.post(`${BASE_URL}/posts`, createContent, {
        headers: {
          Authorization: token
        }
      })
      setDataCreate(response)
      window.location.reload()

    } catch (error) {
      console.log(error)
    }
  }

  const getComments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/comments`, {
        headers: {
          Authorization: token
        }
      })
      setComments(response.data)

    } catch (error) {
      console.log(error)

    }
  }

  const likeOrDislike = async (id, like) => {
    try {
      await axios.put(`${BASE_URL}/posts/${id}/like`, { like }, {
        headers: { Authorization: token }
      });

      getPosts();

    } catch (error) {
      console.log(error);
    }
  }

  const deletePost = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/posts/${id}`, {
        headers: { Authorization: token }
      })

      getPosts()

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
    getComments()

    if (token === "") {
      goToLogin(navigate)
    } else {
      getPosts()
    }

  }, [])

  console.log(dataPost)

  return (
    <ContainerPost>

      <Header />

      <textarea
        placeholder='Escreva seu post...'
        type="text"
        minLength="50" maxLength="255"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}></textarea>

      <ButtonBoss>
        <Button onClick={createPosts}><img src={postar}></img></Button>
        <img className='line' src={Line} alt='Linha de separação'></img>
      </ButtonBoss>

      {dataPost.map((data) => {
        return (
          <div className='card' key={data.id}>
            <div className='content'>
              <h1>Enviado por: {data.creator.name}</h1>
              <h2>{data.content}</h2>

              <div className='buttons'>
                <Button2 onClick={() => likeOrDislike(data.id, true)}><img src={Like} alt='imagem para likes'></img>{data.likes}</Button2>
                <Button2 onClick={() => likeOrDislike(data.id, false)}><img src={Dislike} alt='imagem para dislikes'></img>{data.dislikes}</Button2>
                <Button2 onClick={() => goToComments(navigate, data.id)}><img src={Comment} alt='imagem para comments'></img>{data.comments}</Button2>
                <Button2 onClick={() => deletePost(data.id)}><img src={Delete} alt='imagem para delete'></img></Button2>
              </div>
            </div>
          </div>
        )
      }).reverse()}

      <img className='bar' src={bar}></img>

    </ContainerPost>
  )
}

export default Post