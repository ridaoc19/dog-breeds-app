import { useEffect, useState } from 'react';
import { getSubBreeds, selectBreeds, selectedBreed } from '../../../redux/breedsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

function BreedSelector() {
	const [search, setSearch] = useState<string>('');
	const dispatch = useAppDispatch();
	const breeds = useAppSelector(selectBreeds);

	useEffect(() => {
		if (breeds.includes(search)) {
			dispatch(selectedBreed(search));
			dispatch(getSubBreeds(search));
		}
	}, [breeds, dispatch, search]);

	return (
		<div className='breed-selector' data-testid='breed-selector'>
			<label htmlFor='breedSelect' className='breed-selector__label'>
				Select a breed:
				<input
					id='breedSelect'
					list='breeds'
					onChange={e => {
						setSearch(e.target.value);
					}}
					className='breed-selector__input'
				/>
				<datalist id='breeds'>
					{breeds.map(breed => (
						<option key={breed} value={breed}>
							{breed}
						</option>
					))}
				</datalist>
			</label>
		</div>
	);
}

export default BreedSelector;
