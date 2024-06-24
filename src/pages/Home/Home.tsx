import { useEffect, useMemo } from 'react';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import usePhotoGallery from '../../hooks/usePhotoGallery/usePhotoGallery';
import { getBreeds, selectBreedsState } from '../../redux/breedsSlice';

function Home() {
	const dispatch = useAppDispatch();
	const { breeds } = useAppSelector(selectBreedsState);
	const { Count, Gallery, Pagination } = usePhotoGallery();
	const { isFavorites, selectedBreed, selectedSubBreed } = useAppSelector(selectBreedsState);

	const title = useMemo<string>(() => {
		if (isFavorites) return 'Favoritos';
		if (selectedBreed && !isFavorites) return `${selectedBreed}${selectedSubBreed && `/${selectedSubBreed}`}`;
		return '';
	}, [isFavorites, selectedBreed, selectedSubBreed]);

	useEffect(() => {
		if (Object.keys(breeds).length === 0) {
			dispatch(getBreeds());
		}
	}, [breeds, dispatch]);

	return (
		<div className='home'>
			<div className='home__filter-panel'>
				<FilterPanel />
			</div>
			<div className='home__title'>
				<h2>{title}</h2>
			</div>
			<div className='home__photo-gallery'>
				{Pagination}
				{Count}
				{Gallery}
				{Pagination}
			</div>
		</div>
	);
}

export default Home;
