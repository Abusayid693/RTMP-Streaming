import React from 'react';
import { useNavigate } from 'react-router-dom';
import Model from '../../model';


const StreamDelete = (props: any) => {
  const navigation = useNavigate();


  const handleOffSetClick = (e: any) => {
    navigation('/');
  };

  return (
    <div>
      StreamEdit
      <Model
          title='Delete Stream'
          content = 'Are you sure you want to delete ?'
          actionsForward={()=>alert('')}
          actionsForwardContent="Delete"
          actionsCancel={()=> alert('')}
          actionsCancelContent='Cancel'
          handleOffSetClick={handleOffSetClick}
      />
    </div>
  );
};

export default StreamDelete;
