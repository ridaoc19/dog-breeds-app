import Card from '../../../components/Card/Card';
import Loading from '../../../components/Loading/Loading';
import { InitialState } from '../../../redux/breedsSlice';

function Gallery({
	isLoading,
	images,
	isFavorite,
}: {
	isLoading: InitialState['status']['isLoading'];
	images: DogsBreed.Image[];
	isFavorite: InitialState['isFavorites'];
}) {
	return (
		<div className={`gallery ${images.length === 1 ? 'random' : ''}`} data-testid='gallery'>
			{isLoading ? (
				<Loading />
			) : (
				images.map((image, index) => (
					<Card
						key={`${index.toString()}-${'selectedBreed'}`}
						isFavorite={isFavorite}
						image={image}
						altText={`${index}${'selectedBreed'}`}
					/>
				))
			)}
		</div>
	);
}

export default Gallery;
