import BreedSelector from './BreedSelector/BreedSelector';
import ImageCountSelector from './ImageCountSelector/ImageCountSelector';
import SubBreedSelector from './SubBreedSelector/SubBreedSelector';

interface FilterPanelProps {
	breeds: string[];
	subBreeds: string[];
	setSelectedBreed: (breed: string) => void;
	setSelectedSubBreed: (subBreed: string) => void;
	setImageCount: (count: number | 'all') => void;
}

export default function FilterPanel({
	breeds,
	subBreeds,
	setSelectedBreed,
	setSelectedSubBreed,
	setImageCount,
}: FilterPanelProps) {
	return (
		<div className='filter-panel'>
			<div className='filter-panel__children filter-panel__breed-selector'>
				<BreedSelector breeds={breeds} setSelectedBreed={setSelectedBreed} />
			</div>
			<div className='filter-panel__children filter-panel__sub-breed-selector'>
				<SubBreedSelector subBreeds={subBreeds} setSelectedSubBreed={setSelectedSubBreed} />
			</div>
			<div className='filter-panel__children filter-panel__image-count-selector'>
				<ImageCountSelector setImageCount={setImageCount} />
			</div>
		</div>
	);
}
