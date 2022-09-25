import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, toggleProfile } from 'src/store/profile/actions';
import { selectName, selectVisible } from 'src/store/profile/selectors';

export const Profile: FC = () => {
  const dispath = useDispatch();

  const name = useSelector(selectName);
  const visible = useSelector(selectVisible);
  const [value, setValue] = useState('');

  return (
    <>
      <h2>Profile page</h2>
      <p> name: {name}</p>
      <input type="checkbox" checked={visible} />
      <button onClick={() => dispath(toggleProfile())}>change visible</button>
      <p>Change name:</p>
      <input
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      <button onClick={() => dispath(changeName(value))}>change name</button>
    </>
  );
};
