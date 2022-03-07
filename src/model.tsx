import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router';

const Model = (props: any) => {
  const navigation = useNavigate();

  const handleOffSetClick = (e: any) => {
    navigation('/');
  };

  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={handleOffSetClick}
    >
      <div
        className="ui standard modal visible active"
        onClick={(e: any) => e.stopPropagation()}
      >
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure you want to delete?</div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal') as any,
  );
};

export default Model;
