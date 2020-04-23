import * as React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
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
        <li>
          <Link to='/line'>라인차트</Link>
        </li>
        <li>
          <Link to='/Radar'>레이더차트</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
