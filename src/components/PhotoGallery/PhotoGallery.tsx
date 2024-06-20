import Card from '../Card/Card';

interface PhotoGalleryProps {
	image: string;
	breed: string;
	subBreed: string;
}

function PhotoGallery({ photos }: { photos: PhotoGalleryProps[] }) {
	return (
		<div className='photo-gallery' data-testid='photo-gallery'>
			{photos.map(({ image, breed, subBreed }, index) => (
				<Card key={`${index.toString()}-${breed}`} image={image} altText={`${index}${breed}${subBreed}`} />
			))}
		</div>
	);
}

export default PhotoGallery;
