import React from 'react';
import ReactDOM from 'react-dom';

const Model = (props: any) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">knkjnnk</div>
    </div>,
    document.querySelector('#modal') as any,
  );
};

export default Model;
