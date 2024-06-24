import Card from '../../../components/Card/Card';
import Loading from '../../../components/Loading/Loading';
import { Images } from '../../../services/api';

function Gallery({ isLoading, images, isFavorite }: { isLoading: boolean; images: Images[]; isFavorite: boolean }) {
	return (
		<div className='gallery' data-testid='gallery'>
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
