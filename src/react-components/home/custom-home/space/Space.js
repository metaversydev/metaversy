import React from "react";
import PropTypes from "prop-types";

export function Space({ space }) {
  return (
    <div className="space">
      <a href={space.url}></a>
      <div className="image">
        <img src={space.images.preview.url} alt="" srcset="" />
      </div>
      <div className="space-info">
        <div className="content">
          <h3>{space.name}</h3>
          <div className="users">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 0C6.70131 0 0 6.7219 0 15C0 23.2876 6.71366 30 15 30C23.3236 30 30 23.2559 30 15C30 6.70242 23.2731 0 15 0ZM22.719 23.8346C20.5809 25.7084 17.8693 26.732 15 26.732C12.1312 26.732 9.42013 25.7087 7.28216 23.8357C6.99294 23.5824 6.86222 23.1929 6.93935 22.8163C7.67791 19.2088 9.97575 16.3637 12.9007 15.4276C11.3744 14.5241 10.3268 12.6678 10.3268 10.5229C10.3268 7.49072 12.4191 5.03268 15 5.03268C17.5809 5.03268 19.6732 7.49072 19.6732 10.5229C19.6732 12.6675 18.6259 14.5235 17.1001 15.4271C20.025 16.363 22.3229 19.208 23.0617 22.8152C23.1388 23.1914 23.0078 23.5816 22.719 23.8346Z"
                fill="white"
              />
            </svg>

            <p>{space.lobby_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Space.propTypes = {
  space: PropTypes.object
};
