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
      alignItems: 'center',
    }

    return(
      <div style={styleFlexBoxRow} className ="mainBody__container">
        <div style={styleFlexBoxColumn} className="container__box-left">{/* Leftmost Div START */}
          <div style={styleFlexBoxColumn}>
            <div>913</div>            {/* Number */}
            <div>Your connections</div>            {/* Your Connections */}
            <div>See all</div>            {/* See All */}
            <div>pictures</div>            {/* pictures */}
          </div>          {/* Top END */}
          <div style={styleFlexBoxColumn}>
            <div>Add Personal Contacts</div>            {/* add personal contacts */}
            <div>email</div>            {/* type email form */}
            <div>Continue</div>            {/* continue button */}
            <div>more options</div>            {/* more options */}
          </div>          {/* Middle END */}
          <div style={styleFlexBoxColumn}>
            <div>some words</div>
          </div>          {/* Bottom END */}
        </div>{/* Leftmost DIV END */}

        <div style={styleFlexBoxColumn} className="container__box-middle">{/* Middle Div START */}
          <div style={styleFlexBoxRow}>
            <div>no pending invitations</div>            {/* no pending invitations */}
            <div>manage all</div>            {/* manage all */}
          </div>
          <div>
            <div>people you may know</div>            {/* People you may know */}
            <div></div>            {/* insert a shit ton of people */}
          </div>
        </div>{/* Middle Div END */}

        <div style={styleFlexBoxColumn} className="container__box-right">{/* Right Div START */}
          <div style={styleFlexBoxColumn}>
            <div style={styleFlexBoxRow}>Promoted</div>            {/* Promoted */}
            <div></div>            {/* insert random stuff */}
          </div>
          <hr/>
          <div>boring stuff</div>              {/* all the boring stuff */}
        </div>{/* right Div END */}
      </div>
    );
  }
}

export default MainBody;
