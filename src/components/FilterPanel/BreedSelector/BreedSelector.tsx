import { useEffect, useState } from 'react';
import clean from '../../../assets/clean.svg';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { clearState, getSubBreeds, selectBreeds, selectedBreed } from '../../../redux/breedsSlice';

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
				Seleccione o busca una raza:
				<input
					id='breedSelect'
					list='breeds'
					value={search}
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
			<button
				type='button'
				className='breed-selector__button'
				onClick={() => {
					setSearch('');
					dispatch(clearState());
				}}
			>
				<img src={clean} alt='clean' />
			</button>
		</div>
	);
}

export default BreedSelector;
