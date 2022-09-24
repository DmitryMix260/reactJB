import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, toggleProfile } from 'src/store/profile/actions';
import { ProfileState } from 'src/store/profile/reduser';

export const Profile: FC = () => {
  const dispath = useDispatch();

  const name = useSelector((state: ProfileState) => state.name);
  const visible = useSelector((state: ProfileState) => state.visible);
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
