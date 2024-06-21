import { useEffect, useState } from 'react';
import { getBreedImages, selectBreedsState } from '../../redux/breedsSlice';
import useAppDispatch from '../useAppDispatch';
import useAppSelector from '../useAppSelector';
import Count from './Count/Count';
import Gallery from './Gallery/Gallery';
import Pagination from './Pagination/Pagination';

export default function usePhotoGallery() {
	const dispatch = useAppDispatch();
	const {
		images,
		imageRandom,
		selectedBreed,
		selectedSubBreed,
		selectedImageCount,
		status: { isLoading },
	} = useAppSelector(selectBreedsState);

	const [currentPage, setCurrentPage] = useState(1);
	const imagesPerPage = 10;

	useEffect(() => {
		if (selectedBreed) {
			setCurrentPage(1);
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

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1);
		}
	};

	return {
		Count: <Count totalImages={images.length} currentPage={currentPage} totalPages={totalPages} />,
		Gallery: (
			<Gallery
				isLoading={isLoading}
				images={currentImages.length > 0 ? currentImages : imageRandom}
				isRandom={currentImages.length === 0}
			/>
		),
		Pagination: (
			<Pagination
				currentIndex={currentPage}
				paginationTotal={totalPages}
				disableBack={currentPage === 1}
				disableNext={currentPage === totalPages || currentImages.length === 0}
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handleClickPagination={page => handlePageChange(page)}
			/>
		),
	};
}
