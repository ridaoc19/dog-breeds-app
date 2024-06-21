import BreedSelector from './BreedSelector/BreedSelector';
import ImageCountSelector from './ImageCountSelector/ImageCountSelector';
import SubBreedSelector from './SubBreedSelector/SubBreedSelector';

export default function FilterPanel() {
	return (
		<div className='filter-panel'>
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
