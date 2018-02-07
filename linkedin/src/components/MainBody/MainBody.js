import React from 'react'

class MainBody extends React.Component {
  state = {

  }

  render() {
    return(
      <div>
        <div>{/* Leftmost Div START */}
          <div>
            <div></div>            {/* Number */}
            <div></div>            {/* Your Connections */}
            <div></div>            {/* See All */}
            <div></div>            {/* pictures */}
          </div>          {/* Top END */}
          <div>
            <div></div>            {/* add personal contacts */}
            <div></div>            {/* type email form */}
            <div></div>            {/* continue button */}
            <div></div>            {/* more options */}
          </div>          {/* Middle END */}
          <div>
            <div>some words</div>
          </div>          {/* Bottom END */}
        </div>{/* Leftmost DIV END */}

        <div>{/* Middle Div START */}
          <div>
            <div></div>            {/* no pending invitations */}
            <div></div>            {/* manage all */}
          </div>
          <div>
            <div></div>            {/* People you may know */}
            <div></div>            {/* insert a shit ton of people */}
          </div>
        </div>{/* Middle Div END */}

        <div>{/* Right Div START */}
          <div>
            <div></div>            {/* Promoted */}
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
