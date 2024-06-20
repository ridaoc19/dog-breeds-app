import { selectedSubBreed, selectSubBreeds } from '../../../redux/breedsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

function SubBreedSelector() {
	const dispatch = useAppDispatch();
	const subBreeds = useAppSelector(selectSubBreeds);

	return (
		<div className='sub-breed-selector' data-testid='sub-breed-selector'>
			<label htmlFor='subBreedSelect'>
				Select a sub-breed:
				<select
					id='subBreedSelect'
					onChange={e => dispatch(selectedSubBreed(e.target.value))}
					className='sub-breed-selector__select'
				>
					<option value='' disabled selected>
						Choose a sub-breed
					</option>
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
