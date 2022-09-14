import style from './MessageList.module.css';

export const MessageList = ({ messages }) => {
  return (
    <>
      <div className={style.messagelist}>
        <ul className={style.messagelistUl}>
          {messages.map((message, idx) => (
            <li className={style.messagelistLi} key={idx} data-testid="li">
              {message.autor}: {message.message}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
