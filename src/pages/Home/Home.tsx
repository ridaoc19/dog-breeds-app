import { useEffect } from 'react';
import { getBreeds, selectBreeds } from '../../redux/breedsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';

function Home() {
	const dispatch = useAppDispatch();
	const breeds = useAppSelector(selectBreeds);
	useEffect(() => {
		if (breeds.length === 0) {
			dispatch(getBreeds());
		}
	}, [breeds, dispatch]);

	return (
		<div className='home'>
			<FilterPanel />
			<PhotoGallery />
		</div>
	);
}

export default Home;
