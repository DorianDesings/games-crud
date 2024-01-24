import { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [users, setUsers] = useState([]);
	return (
		<>
			<GlobalStyles />
			<Header />
			<Main users={users} setUsers={setUsers} />
		</>
	);
};

export default App;
