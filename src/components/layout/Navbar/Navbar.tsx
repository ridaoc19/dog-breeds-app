import logo from '../../../assets/logo.svg';

function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<img src={logo} alt='logo' />
			</div>
		</div>
	);
}

export default Navbar;
