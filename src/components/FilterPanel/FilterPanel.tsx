import useAppSelector from '../../hooks/useAppSelector';
import { selectBreedsState } from '../../redux/breedsSlice';
import BreedSelector from './BreedSelector/BreedSelector';
import ImageCountSelector from './ImageCountSelector/ImageCountSelector';
import SubBreedSelector from './SubBreedSelector/SubBreedSelector';

export default function FilterPanel() {
	const { isFavorites, selectedBreed } = useAppSelector(selectBreedsState);
	return (
		<div className={`filter-panel ${isFavorites && selectedBreed ? 'no-events' : ''}`}>
			<div className='filter-panel__children filter-panel__breed-selector'>
				<BreedSelector />
			</div>
			<div className='filter-panel__children filter-panel__sub-breed-selector'>
				<SubBreedSelector />
			</div>
			<div className='filter-panel__children filter-panel__image-count-selector'>
				<ImageCountSelector />
			</div>
		</div>
	);
}
