import React from 'react'

function Items(props) {
  const mainBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
  };
  const imageStyle = {
    width: '30px',
    height: '30px',
  };
  return (
    <div style={mainBoxStyle}>
      <img src={props.info.icon} style={imageStyle} alt="broken" />
      <div>{props.info.text}</div>
    </div>
  );
}

export default Items;