import { useEffect } from 'react';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { getBreeds, selectBreeds } from '../../redux/breedsSlice';

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
