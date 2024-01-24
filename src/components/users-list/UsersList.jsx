import User from '../user/User';

const UsersList = ({ users }) => {
	if (users.length === 0) return <h2>No users</h2>;
	return (
		<div>
			{users.map(user => {
				return <User key={user.id} {...user} />;
			})}
		</div>
	);
};

export default UsersList;
