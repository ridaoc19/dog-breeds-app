import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { postSelectedSubBreed, selectBreedsState } from '../../../redux/breedsSlice';

function SubBreedSelector() {
	const dispatch = useAppDispatch();
	const { selectedSubBreed, breeds, selectedBreed } = useAppSelector(selectBreedsState);

	return (
		<div className='sub-breed-selector' data-testid='sub-breed-selector'>
			<label htmlFor='subBreedSelect'>
				Seleccione una subraza:
				<select
					id='subBreedSelect'
					value={selectedSubBreed}
					onChange={e => dispatch(postSelectedSubBreed({ breed: selectedBreed, subBreed: e.target.value }))}
					className='sub-breed-selector__select'
					disabled={!selectedBreed}
				>
					<option value=''>Elige una subraza</option>
					{selectedBreed &&
						breeds[selectedBreed].subBreeds.map(subBreed => (
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
