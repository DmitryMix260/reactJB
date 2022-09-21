import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './Header.module.css';

export const Header: FC = () => {
  const navigate = [
    {
      name: 'Main',
      path: '/',
    },
    {
      name: 'Chats',
      path: '/chats',
    },
    {
      name: 'Profile',
      path: '/profile',
    },
  ];
  return (
    <>
      <header className={style.Appheader}>
        <p>My first page React</p>
        <ul>
          {navigate.map((navigateli, idx) => (
            <li className={style.messagelistLi} key={idx} data-testid="li">
              <Link to={navigateli.path}> {navigateli.name} </Link>
            </li>
          ))}
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
