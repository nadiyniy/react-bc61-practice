export const Header = ({ content = 'default' }) => {
	return (
		<header>
			<div>{content}</div>
			<div>About</div>
		</header>
	);
};
