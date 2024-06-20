import { useEffect, useState } from 'react';
import {
	getBreedImageRandom,
	getBreedImages,
	selectImageCount,
	selectImageRandom,
	selectImages,
	selectSelectedBreed,
	selectSelectedSubBreed,
} from '../../redux/breedsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Card from '../Card/Card';
import Pagination from './Pagination/Pagination';

function PhotoGallery() {
	const dispatch = useAppDispatch();
	const selectedBreed = useAppSelector(selectSelectedBreed);
	const selectedSubBreed = useAppSelector(selectSelectedSubBreed);
	const selectedImageCount = useAppSelector(selectImageCount);
	const images = useAppSelector(selectImages);
	const imageRandom = useAppSelector(selectImageRandom);

	const [currentPage, setCurrentPage] = useState(1);
	const imagesPerPage = 10;

	useEffect(() => {
		if (images.length === 0) {
			dispatch(getBreedImageRandom());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [images]);

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

	const indexOfLastImage = currentPage * imagesPerPage;
	const indexOfFirstImage = indexOfLastImage - imagesPerPage;
	const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
	const totalPages = Math.ceil(images.length / imagesPerPage);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div className='photo-gallery' data-testid='photo-gallery'>
			<div className='photo-gallery__total'>
				{images.length > 0 && (
					<>
						<p>
							<strong>Total:</strong> {images.length}
						</p>
						<p>
							<strong>pagina:</strong> {currentPage}/{totalPages}
						</p>
					</>
				)}
			</div>
			<div className='photo-gallery__cards'>
				{images.length === 0 ? (
					<div className='photo-gallery__cards-image'>
						<img src={imageRandom} alt={imageRandom} />
					</div>
				) : (
					currentImages.map((image, index) => (
						<Card key={`${index.toString()}-${selectedBreed}`} image={image} altText={`${index}${selectedBreed}`} />
					))
				)}
			</div>
			<div className='photo-gallery__pagination'>
				{images.length > imagesPerPage && (
					<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
				)}
			</div>
		</div>
	);
}

export default PhotoGallery;
