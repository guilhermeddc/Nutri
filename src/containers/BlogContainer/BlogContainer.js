import React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import BlogIntrodution from '../../components/BlogIntrodution';
import BlogPosts from '../../components/BlogPosts';
import useStyles from './styles'

const BlogContainer = () => {
  const classes = useStyles()

  return (
    <div>
      <Navbar />
      <BlogIntrodution />
      <section id="blog" className={classes.container}>
        <div className={classes.blogTitle}>
          <h1>Posts Recentes</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
      </section>
      <Footer />
    </div>
  );
};

export default BlogContainer;