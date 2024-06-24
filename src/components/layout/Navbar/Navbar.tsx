import logo from '../../../assets/logo.svg';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { clearState, postIsFavorite, selectBreedsState } from '../../../redux/breedsSlice';
import { getAllFavorites } from '../../../services/api';
import Svg from '../../icons/Svg';
import SvgType from '../../icons/svgType';

function Navbar() {
	const dispatch = useAppDispatch();
	const { isFavorites } = useAppSelector(selectBreedsState);
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
			<div className='navbar__favorites'>
				<button
					aria-label='Go to favorites'
					type='button'
					className='navbar__favorites-button'
					onClick={() => {
						dispatch(postIsFavorite());
					}}
				>
					<Svg type={isFavorites ? SvgType.Favorites : SvgType.Favorites_black_size} />
				</button>
				<h4>{getAllFavorites().length}</h4>
			</div>
		</div>
	);
}

export default Navbar;
