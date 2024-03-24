import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Course() {
  const { user } = useContext(UserContext);
  return <p>Your course is {user.course}</p>;
}
