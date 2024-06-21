import { useEffect } from 'react';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import usePhotoGallery from '../../hooks/usePhotoGallery/usePhotoGallery';
import { getBreeds, selectBreedsState } from '../../redux/breedsSlice';

function Home() {
	const dispatch = useAppDispatch();
	const { breeds } = useAppSelector(selectBreedsState);
	const { Count, Gallery, Pagination } = usePhotoGallery();

	useEffect(() => {
		if (breeds.length === 0) {
			dispatch(getBreeds());
		}
	}, [breeds, dispatch]);

	return (
		<div className='home'>
			<div className='home__filter-panel'>
				<FilterPanel />
			</div>
			<div className='home__photo-gallery'>
				{Count}
				{Gallery}
				{Pagination}
			</div>
			{/* <PhotoGallery /> */}
		</div>
	);
}

export default Home;
