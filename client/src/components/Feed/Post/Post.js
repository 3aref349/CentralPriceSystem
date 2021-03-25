import React from 'react';

import Button from '../../Button/Button';
import './Post.css';

const post = props => (
  <article className="post">
    <header className="post__header">
    
      <h1 className="post__title">{props.title}</h1>
    </header>
    {/* <div className="post__image">
      <Image imageUrl={props.image} contain />
    </div>
    <div className="post__content">{props.content}</div> */}
    <div className="post__actions">
    </div>
  </article>
);

export default post;
