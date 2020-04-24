import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuNav = styled.nav`
  width: 100%;
  height: 8vh;
  background: #00b894;
  & ul {
    padding: 0;
    display: flex;
    list-style: none;
    justify-content : space-around;
    align-items: center;
    height: 100%;
  }
  & a {
    text-decoration: none;
    color: white;
    &:hover {
      color: #ffeaa7;
    }
  }
`;

const Menu = () => {
  return (
    <MenuNav>
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
    </MenuNav>
  );
};

export default Menu;
