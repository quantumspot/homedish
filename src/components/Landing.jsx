import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import InputBase from '@material-ui/core/InputBase';

const Landing = () => {

    return (
      <div className="landing">
        <div className="title">
          <h1>Taste home cooking from your fellow<br/>
            neighbors and friends
          </h1>
        </div>
        <div className="subtitle">
          Share your culture and favorite cuisine with others, while never letting your extras go to waste
        </div>
        <div className="get-started">
          <div>
            Get started today!
          </div>
          <div className="search-loc">
            <div>
              <LocationOnOutlinedIcon />
            </div>
            <div>
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div>
                <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Landing;