import logo from '../../../assets/logo.svg';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { clearState } from '../../../redux/breedsSlice';

function Navbar() {
	const dispatch = useAppDispatch();
	return (
		<div className='navbar'>
			<button
				type='button'
				className='navbar__logo'
				onClick={() => {
					dispatch(clearState());
				}}
			>
				<img src={logo} alt='logo' />
			</button>
		</div>
	);
}

export default Navbar;
