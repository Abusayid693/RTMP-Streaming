import React from 'react';
import ReactDOM from 'react-dom';

const Model: React.FC<{
  title: string;
  content: string;
  actionsForward: any;
  actionsForwardContent: string;
  actionsCancel: any;
  actionsCancelContent: string;
  handleOffSetClick: any;
}> = ({
  title,
  content,
  actionsForward,
  actionsForwardContent,
  actionsCancelContent,
  actionsCancel,
  handleOffSetClick,
}) => {
  return ReactDOM.createPortal(
    <div
      className="ui dimmer modals visible active"
      onClick={handleOffSetClick}
    >
      <div
        className="ui standard modal visible active"
        onClick={(e: any) => e.stopPropagation()}
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">
          <button className="ui primary button" onClick={actionsForward}>
            {actionsForwardContent}
          </button>
          <button className="ui button" onClick={actionsCancel}>
            {actionsCancelContent}
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal') as any,
  );
};

export default Model;
