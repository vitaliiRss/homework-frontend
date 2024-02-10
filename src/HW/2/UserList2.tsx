import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType  // пропиши типизацию
	filterUsers: () => void // пропиши типизацию
};

export const UserList2 = ({users, filterUsers}: UserList2PropsType) => {
  return (
    <div id={'hw02-users'}>
      <h2>User List:</h2>
      <ul>
        {users.myFriends.map((user) => (
          <CurrentUser user={user} />
        ))}
      </ul>
      <button id={'hw02-filter-button'} onClick={filterUsers}>SHOW ME FRIENDS FROM LA</button>
    </div>
  );
};
