import React from 'react';

function Links(props) {

  const wholeBoxStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '33.33%',
    padding: '10px 0',
    border: '1px solid grey',
  }

  const imageStyling = {
    height: '120px',
    width: '120px',
    borderRadius: '50%',
  };

  const textStyling = {
    margin: '2px 0',
  }

  return (
    <div style={wholeBoxStyling}>
      <img style={imageStyling} src={props.linkInfo.picture} alt="superbroken"/>
      <h4 style={textStyling}>{props.linkInfo.name}</h4>
      <p style={textStyling}>{props.linkInfo.work}</p>
      <p style={textStyling}>{props.linkInfo.links}</p>
      <button>Connect</button>
    </div>
  );
}

export default Links;
