import React from 'react';
import './mainBody.css';

class MainBody extends React.Component {
  state = {

  }

  render() {

    const styleFlexBoxRow = {
      display: 'flex',
      flexDirection: 'row',
    }

    const styleFlexBoxColumn = {
      display: 'flex',
      flexDirection: 'column',
    }

    return(
      <div style={styleFlexBoxRow}>
        <div style={styleFlexBoxColumn}>{/* Leftmost Div START */}
          <div style={styleFlexBoxColumn}>
            <div></div>            {/* Number */}
            <div></div>            {/* Your Connections */}
            <div></div>            {/* See All */}
            <div></div>            {/* pictures */}
          </div>          {/* Top END */}
          <div style={styleFlexBoxColumn}>
            <div></div>            {/* add personal contacts */}
            <div></div>            {/* type email form */}
            <div></div>            {/* continue button */}
            <div></div>            {/* more options */}
          </div>          {/* Middle END */}
          <div style={styleFlexBoxColumn}>
            <div>some words</div>
          </div>          {/* Bottom END */}
        </div>{/* Leftmost DIV END */}

        <div style={styleFlexBoxColumn}>{/* Middle Div START */}
          <div style={styleFlexBoxRow}>
            <div ></div>            {/* no pending invitations */}
            <div></div>            {/* manage all */}
          </div>
          <div>
            <div></div>            {/* People you may know */}
            <div></div>            {/* insert a shit ton of people */}
          </div>
        </div>{/* Middle Div END */}

        <div style={styleFlexBoxColumn}>{/* Right Div START */}
          <div style={styleFlexBoxColumn}>
            <div style={styleFlexBoxRow}></div>            {/* Promoted */}
            <div></div>            {/* insert random stuff */}
          </div>
          <hr/>
          <div></div>              {/* all the boring stuff */}
        </div>{/* right Div END */}
      </div>
    );
  }
}

export default MainBody;
