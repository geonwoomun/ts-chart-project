import * as React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to='/'>홈</Link>
      </li>
      <li>
        <Link to='/pie'>파이차트</Link>
      </li>
      <li>
        <Link to='/bar'>막대차트</Link>
      </li>
    </ul>
  );
};

export default Menu;
