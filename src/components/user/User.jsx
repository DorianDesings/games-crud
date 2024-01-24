const User = ({ name, email, sex, image }) => {
	return (
		<div>
			<img src={image} alt={`Profile image of ${name}`} />
			<p>{name}</p>
			<p>{email}</p>
			<p>{sex}</p>
		</div>
	);
};

export default User;
