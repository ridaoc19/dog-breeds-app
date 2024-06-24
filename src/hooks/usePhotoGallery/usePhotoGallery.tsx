import { useEffect, useMemo, useState } from 'react';
import { selectBreedsState } from '../../redux/breedsSlice';
import useAppSelector from '../useAppSelector';
import Count from './Count/Count';
import Gallery from './Gallery/Gallery';
import Pagination from './Pagination/Pagination';
import { getAllFavorites } from '../../services/api';

export default function usePhotoGallery() {
	const {
		// images: imageAll,
		breeds,
		isFavorites,
		selectedBreed,
		selectedSubBreed,
		selectedImageCount,
		status: { isLoading },
	} = useAppSelector(selectBreedsState);

	const [currentPage, setCurrentPage] = useState(1);
	const imagesPerPage = 12;

	const images = useMemo(() => {
		if (isFavorites) {
			return getAllFavorites();
		}
		if (selectedBreed) {
			return breeds[selectedBreed].images
				.filter(({ subBreed }) => selectedSubBreed === '' || subBreed === selectedSubBreed)
				.slice(0, selectedImageCount);
		}
		return [];
	}, [breeds, selectedBreed, selectedImageCount, selectedSubBreed, isFavorites]);

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
	useEffect(() => {
		handlePageChange(1);
	}, [selectedBreed, selectedSubBreed, selectedImageCount, isFavorites]);

	return {
		Count: <Count totalImages={images.length} currentPage={currentPage} totalPages={totalPages} />,
		Gallery: <Gallery isLoading={isLoading} images={currentImages} isFavorite={isFavorites} />,
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
