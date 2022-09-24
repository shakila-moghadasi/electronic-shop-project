import React from 'react';
import Headeruser from '../../user/Headeruser';
import Footeruser from '../../user/Footeruser';

const User = (props) => {
  return (
    <div>
        <Headeruser/>
        {props.children}
        <Footeruser/>
    </div>
  )
}

export default User;