import React from 'react';
import './mainBody.css';
import dummyData from './dummyData';
import Links from './Links';

class MainBody extends React.Component {
  state = {

  }

  render() {

    const styleFlexBoxRow = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }

    const styleFlexBoxColumn = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }

    return(
      <div style={styleFlexBoxRow} className ="mainBody__container">
        <div style={styleFlexBoxColumn} className="container__box container__box-grey container__box-left">{/* Leftmost Div START */}
          <div style={styleFlexBoxColumn} className="box-left__top">
            <div>913</div>            {/* Number */}
            <div>Your connections</div>            {/* Your Connections */}
            <div>See all</div>            {/* See All */}
            <div>pictures</div>            {/* pictures */}
          </div>          {/* Top END */}
          <div style={styleFlexBoxColumn} className ="box-left__middle"> 
            <div>Add Personal Contacts</div>            {/* add personal contacts */}
            <div>email</div>            {/* type email form */}
            <button>Continue</button>            {/* continue button */}
            <div>more options</div>            {/* more options */}
          </div>          {/* Middle END */}
          <div style={styleFlexBoxColumn}>
            <div>We'll import your address book to suggest connections. Learn more</div>
          </div>          {/* Bottom END */}
        </div>{/* Leftmost DIV END */}

        <div style={styleFlexBoxColumn} className="container__box-middle">{/* Middle Div START */}
          <div style={styleFlexBoxRow} className="container__box-grey container__box-topMiddle">
            <div>no pending invitations</div>            {/* no pending invitations */}
            <div>manage all</div>            {/* manage all */}
          </div>
          <div className="container__box-grey">
            <div>people you may know</div>            {/* People you may know */}
            <div style={styleFlexBoxRow}>            {/* insert a shit ton of people */}
              {dummyData.map((link, i) => {
                return <Links key={i+'a'} linkInfo={link} />
              })}
            </div>
          </div>
        </div>{/* Middle Div END */}

        <div style={styleFlexBoxColumn} className="container__box-grey container__box-right">{/* Right Div START */}
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
