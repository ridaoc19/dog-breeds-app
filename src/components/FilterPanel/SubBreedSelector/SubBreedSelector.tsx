import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { postSelectedSubBreed, selectBreedsState } from '../../../redux/breedsSlice';

function SubBreedSelector() {
	const dispatch = useAppDispatch();
	const { selectedSubBreed, subBreeds } = useAppSelector(selectBreedsState);

	return (
		<div className='sub-breed-selector' data-testid='sub-breed-selector'>
			<label htmlFor='subBreedSelect'>
				Seleccione una subraza:
				<select
					id='subBreedSelect'
					value={selectedSubBreed}
					onChange={e => dispatch(postSelectedSubBreed(e.target.value))}
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
