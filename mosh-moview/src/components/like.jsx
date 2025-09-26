import React from "react";
import 'font-awesome/css/font-awesome.min.css';

// Heart icon with toggle switch component for liking movies
const Like = ({ liked, onClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i
        className={`fa ${liked ? "fa-heart" : "fa-heart-o"}`}
        style={{
    color: 'red',
    cursor: 'pointer',
    marginRight: '10px'
        }}
        onClick={onClick}
        title="Click heart to toggle like"
      />
      <div
        style={{
    width: '50px',
    height: '20px',
    backgroundColor: liked ? '#3dc13dff' : '#ccc',
    borderRadius: '10px',
    position: 'relative',
    cursor: 'pointer',
    display: 'inline-block',
    verticalAlign: 'middle',
    transition: 'background-color 0.3s ease'
        }}
        onClick={onClick}
        title="Click toggle to switch like state"
      >
      <div
          style={{
            width: '21px',
            height: '18px',
            backgroundColor: 'white',
            borderRadius: '50%',
            position: 'absolute',
    top: '2px',
    left: liked ? '24px' : '2px',
    transition: 'left 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
      />
      </div>
      </div>
  );
};

export default Like;