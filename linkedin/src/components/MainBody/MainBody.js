import React from 'react';
import './mainBody.css';
import dummyData from './dummyData';
import dummyAds from './dummyAds';
import Links from './Links';
import Spam from './Spam';

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
            <form>           {/* type email form */}
              <input type="text" placeholder="address@example.com" />
              <button>Continue</button>            {/* continue button */}
            </form>
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

        <div style={styleFlexBoxColumn} className="container__box-right">{/* Right Div START */}
          <div style={styleFlexBoxColumn} className="container__box-grey box-right__top">
            <div style={styleFlexBoxRow}>Promoted</div>            {/* Promoted */}
            <div style={styleFlexBoxColumn} className="box-right__spam">
              {dummyAds.map((ad, i) => {
                return <Spam key={i+'b'} spamInfo={ad} />
              })}
            </div>            {/* Spam Ads */}
          </div>
          <hr/>
          <img className="box-right__sword-picture" src="https://img.nerdburglars.net/wp-content/uploads/2015/08/mastersword.png" alt="Broken Sword" />
          <div className="box-right__bottom">boring stuff</div>              {/* all the boring stuff */}
        </div>{/* right Div END */}
      </div>
    );
  }
}

export default MainBody;
