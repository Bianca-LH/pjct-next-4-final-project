import { notFound } from 'next/navigation';
import { getUserByUsername } from '../../database/users';

// import { getUserByUsername } from '../../../database/users';

type Props = { params: { username: string } };

export default async function UserProfile({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  return (
    <>
      <h1>Hello, {user.username}</h1>
      <br />
      <p>id: {user.id}</p>
    </>
  );
}
