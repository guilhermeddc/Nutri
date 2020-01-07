import React from 'react'
import useStyles from './styles'
import postImg from '../../assets/posts/sintomas-de-tireoide.png'
import icon from '../../assets/icons/hearts.png'

const BlogPosts = () => {
  const classes = useStyles()

  return (
    <article className={classes.Post}>
      <div className={classes.postImg}></div>
      {/* <img src={postImg} alt="foto do post" /> */}
      <div>
        <span>
          <img src={icon} alt="icom" />
          <p>Saude</p>
        </span>
        <h2>O que você precisa saber sobre a Tireoide</h2>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor.
        </p>
        <p><strong>Por</strong> Cassiana Della Pace, <strong>xx/xx/xxxx</strong></p>
        <a href="#">Leia Mais</a>
      </div>
    </article>
  )
}

export default BlogPosts
