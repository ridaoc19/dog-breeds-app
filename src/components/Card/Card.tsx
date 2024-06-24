import useAppDispatch from '../../hooks/useAppDispatch';
import { updateToggleFavorite } from '../../redux/breedsSlice';
import { Images } from '../../services/api';
import Svg from '../icons/Svg';
import SvgType from '../icons/svgType';

interface CardProps {
	image: Images;
	altText: string;
	isFavorite: boolean;
}

function Card({ image: { image, breed, favorite, subBreed }, altText, isFavorite }: CardProps) {
	const dispatch = useAppDispatch();
	return (
		<div className='card' data-testid='card'>
			<div className='card__image'>
				<img src={image} alt={altText} />
			</div>
			<div className='card__content'>
				{isFavorite && (
					<>
						<h2>{breed}</h2>
						<h3>{subBreed}</h3>
					</>
				)}
				<button
					type='button'
					aria-label='toggle favorites'
					onClick={() => {
						dispatch(updateToggleFavorite({ breed, imageUrl: image }));
					}}
				>
					<Svg type={favorite ? SvgType.Favorites_red : SvgType.Favorites_black} />
				</button>
			</div>
		</div>
	);
}

export default Card;
