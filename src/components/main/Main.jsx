import { useState } from 'react';
import AddUserForm from '../add-user-form/AddUserForm';
import AddUser from '../add-user/AddUser';
import UsersList from '../users-list/UsersList';

const Main = ({ users, setUsers }) => {
	const [showForm, setShowForm] = useState(0);
	return (
		<main>
			{showForm === 0 && <AddUser setShowForm={setShowForm} />}
			<UsersList users={users} />
			{showForm !== 0 && (
				<AddUserForm
					users={users}
					setUsers={setUsers}
					setShowForm={setShowForm}
				/>
			)}
		</main>
	);
};

export default Main;
