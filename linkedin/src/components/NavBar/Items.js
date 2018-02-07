import React from 'react'

function Items(props) {
  const mainBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
  const imageStyle = {
    width: '30px',
    height: '30px',
  };
  return (
    <div style={mainBox}>
      <img src={props.info.icon} style={imageStyle} alt="broken" />
      <div>{props.info.text}</div>
    </div>
  );
}

export default Items;