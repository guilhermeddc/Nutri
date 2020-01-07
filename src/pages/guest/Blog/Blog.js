import React from 'react';
import BlogContainer from '../../../containers/BlogContainer'

const Blog = props => {
  return (
    <div>
      <BlogContainer {...props} />
    </div>
  );
};

export default Blog;