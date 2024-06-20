import { useEffect } from 'react';
import { getBreeds } from '../../redux/breedsSlice';
import { useAppDispatch } from '../../redux/hooks';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';

function Home() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getBreeds());
	}, [dispatch]);

	return (
		<div>
			<FilterPanel />
			<PhotoGallery />
		</div>
	);
}

export default Home;
