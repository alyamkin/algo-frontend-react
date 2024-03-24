import Profile from './Profile';
import { UserContext, UserContextProvider } from './UserContext';
import { useContext } from 'react';

export default function App() {
  return (
    <main>
      <UserContextProvider>
        <AppInternal />
      </UserContextProvider>
    </main>
  );
}

function AppInternal() {
  const { toggleUser } = useContext(UserContext);

  return (
    <>
      <Profile />
      <button onClick={toggleUser}>Toggle User</button>
    </>
  );
}
