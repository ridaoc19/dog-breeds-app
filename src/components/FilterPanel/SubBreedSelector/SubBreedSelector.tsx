import { selectedSubBreed, selectSelectedSubBreed, selectSubBreeds } from '../../../redux/breedsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

function SubBreedSelector() {
	const dispatch = useAppDispatch();
	const subBreeds = useAppSelector(selectSubBreeds);
	const selectSubBreed = useAppSelector(selectSelectedSubBreed);

	return (
		<div className='sub-breed-selector' data-testid='sub-breed-selector'>
			<label htmlFor='subBreedSelect'>
				Seleccione una subraza:
				<select
					id='subBreedSelect'
					value={selectSubBreed}
					onChange={e => dispatch(selectedSubBreed(e.target.value))}
					className='sub-breed-selector__select'
					disabled={subBreeds.length === 0}
				>
					<option value=''>Elige una subraza</option>
					{subBreeds.map(subBreed => (
						<option key={subBreed} value={subBreed}>
							{subBreed}
						</option>
					))}
				</select>
			</label>
		</div>
	);
}

export default SubBreedSelector;
