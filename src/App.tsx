import { FC } from 'react';
import './App.css';
import { ChatList } from 'components/ChatList';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/profile';
import { ChatPage } from './pages/ChatPage';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store';

export const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="chats">
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<ChatPage />} />
            </Route>
            <Route path="*" element={<div>404 page</div>} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
};
