import Card from '../../../components/Card/Card';
import Loading from '../../../components/Loading/Loading';

function Gallery({ isLoading, images, isRandom }: { isLoading: boolean; images: string[]; isRandom: boolean }) {
	return (
		<div className={`gallery ${isRandom ? 'random' : ''}`}>
			{isLoading ? (
				<Loading />
			) : (
				images.map((image, index) => (
					<Card key={`${index.toString()}-${'selectedBreed'}`} image={image} altText={`${index}${'selectedBreed'}`} />
				))
			)}
		</div>
	);
}

export default Gallery;
