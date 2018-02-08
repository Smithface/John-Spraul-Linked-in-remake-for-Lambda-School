import React from 'react';

function Links(props) {
  return (
    <div>
      <img src={props.linkInfo.picture} alt="superbroken"/>
      <h4>{props.linkInfo.name}</h4>
      <p>{props.linkInfo.work}</p>
      <p>{props.linkInfo.links}</p>
      <button>Connect</button>
    </div>
  );
}

export default Links;
