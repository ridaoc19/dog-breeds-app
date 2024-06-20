import { useEffect } from 'react';
import {
	getBreedImages,
	selectImageCount,
	selectImages,
	selectSelectedBreed,
	selectSelectedSubBreed,
} from '../../redux/breedsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Card from '../Card/Card';

function PhotoGallery() {
	const dispatch = useAppDispatch();
	const selectedBreed = useAppSelector(selectSelectedBreed);
	const selectedSubBreed = useAppSelector(selectSelectedSubBreed);
	const selectedImageCount = useAppSelector(selectImageCount);
	const images = useAppSelector(selectImages);

	useEffect(() => {
		if (selectedBreed) {
			dispatch(
				getBreedImages({
					breed: selectedBreed,
					subBreed: selectedSubBreed,
					imageCount: selectedImageCount,
				})
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedBreed, selectedSubBreed, selectedImageCount]);

	return (
		<div className='photo-gallery' data-testid='photo-gallery'>
			{images?.map((image, index) => (
				<Card key={`${index.toString()}-${selectedBreed}`} image={image} altText={`${index}${selectedBreed}`} />
			))}
		</div>
	);
}

export default PhotoGallery;
