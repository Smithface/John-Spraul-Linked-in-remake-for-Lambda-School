import React from 'react';

function Links(props) {

  const wholeBoxStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: '33.33%',
    padding: '10px 0',
    border: '1px solid grey',
    flex: '1',
  }

  const imageStyling = {
    height: '120px',
    width: '120px',
    borderRadius: '50%',
  };

  const textStyling = {
    margin: '2px 0',
  }

  const buttonStyling = {
    background: 'white',
    color: 'rgb(101, 165, 238)',
    borderColor: 'rgb(101, 165, 238)',
    borderRadius: '10%',
  }

  return (
    <div style={wholeBoxStyling}>
      <img style={imageStyling} src={props.linkInfo.picture} alt="superbroken"/>
      <h4 style={textStyling}>{props.linkInfo.name}</h4>
      <p style={textStyling}>{props.linkInfo.work}</p>
      <p style={textStyling}><span role="img" aria-label="Link">&#x1F517;</span>{props.linkInfo.links}</p>
      <button style={buttonStyling}>Connect</button>
    </div>
  );
}

export default Links;
