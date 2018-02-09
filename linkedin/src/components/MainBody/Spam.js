import React from 'react';

function Spam(props) {
  const wholeBoxStyling = {
    display: 'flex',
    justifyContent: 'space-around',
    flex: '1',
  };

  const imageStyling = {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
  };

  const titleStyling = {
    fontWeight: 'bold',
  };

  const wordsStyling = {
    fontSize: '.7em',
  }

  const arrowStyling = {
    alignSelf: 'center',
  };

  return (
    <div style={wholeBoxStyling}>
        <img style={imageStyling} src={props.spamInfo.pic} alt='somewhat broken' />
        <div>
          <div style={titleStyling}>{props.spamInfo.title}</div>
          <div style={wordsStyling}>{props.spamInfo.words}</div>
        </div>
        <div style={arrowStyling}>&#x27A4;</div>
    </div>
  );
} 

export default Spam;
