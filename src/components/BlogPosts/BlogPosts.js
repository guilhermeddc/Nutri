import React from 'react'
import {Container, PostImg} from './styles'
import icon from '../../assets/icons/hearts.png'

const BlogPosts = () => {
  return (
    <Container>
      <PostImg />
      <div>
        <span>
          <img src={icon} alt="icon" />
          <p>Saude</p>
        </span>
        <h2>O que você precisa saber sobre a Tireoide</h2>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor.
        </p>
        <p><strong>Por</strong> Cassiana Della Pace, <strong>xx/xx/xxxx</strong></p>
        <a href="#top">Leia Mais</a>
      </div>
    </Container>
  )
}

export default BlogPosts
