import { useState } from 'react';
import { v4 } from 'uuid';

const AddUserForm = ({ users, setUsers, setShowForm }) => {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		sex: '',
		image: ''
	});

	return (
		<form
			onSubmit={event =>
				handleSubmit(event, users, setUsers, formValues, setShowForm)
			}
		>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					name='email'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
			</div>
			<div>
				<label htmlFor='man'>Man</label>
				<input
					type='radio'
					id='man'
					name='sex'
					value='men'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
				<label htmlFor='woman'>Woman</label>
				<input
					type='radio'
					id='woman'
					name='sex'
					value='women'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
			</div>
			<div>
				<img
					src={formValues.image || 'https://i.stack.imgur.com/SE2cv.jpg'}
					alt=''
				/>
				<button
					disabled={!formValues.sex}
					type='button'
					onClick={() => generateRandomUserImage(formValues, setFormValues)}
				>
					Generate Random Image
				</button>
			</div>
			<button disabled={Object.values(formValues).some(value => !value)}>
				Create User
			</button>
		</form>
	);
};

const handleSubmit = (event, users, setUsers, formValues, setShowForm) => {
	event.preventDefault();
	setUsers([...users, { ...formValues, id: v4() }]);
	setShowForm(0);
};

const changeFormValues = (input, formValues, setFormValues) => {
	const { name, value } = input;
	setFormValues({ ...formValues, [name]: value });
};

const generateRandomUserImage = (formValues, setFormValues) => {
	const { sex } = formValues;
	const randomNumber = Math.floor(Math.random() * 99);
	const randomImage = `https://randomuser.me/api/portraits/${sex}/${randomNumber}.jpg`;
	setFormValues({ ...formValues, image: randomImage });
};

export default AddUserForm;
