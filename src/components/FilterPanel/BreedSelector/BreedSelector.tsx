import { useEffect, useState } from 'react';
import clean from '../../../assets/clean.svg';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { clearState, postSelectedBreed, selectBreedsState } from '../../../redux/breedsSlice';

function BreedSelector() {
	const [search, setSearch] = useState<string>('');
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { breeds, selectedBreed } = useAppSelector(selectBreedsState);

	useEffect(() => {
		if (!selectedBreed) {
			setSearch('');
			setShowDropdown(false);
		}
	}, [selectedBreed]);

	useEffect(() => {
		if (Object.keys(breeds).includes(search)) {
			dispatch(postSelectedBreed({ breed: search, subBreed: '' }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	return (
		<div className='breed-selector' data-testid='breed-selector'>
			<div className='breed-selector__input'>
				<label htmlFor='breedSelect' className='breed-selector__input-label'>
					Seleccione o busca una raza:
					<input
						id='breedSelect'
						value={search}
						placeholder='Elige o busca una raza'
						onChange={e => {
							setSearch(e.target.value);
							setShowDropdown(true);
						}}
						onBlur={() => {
							// Small delay to allow clicking on dropdown item before it hides
							setTimeout(() => setShowDropdown(false), 100);
						}}
						onFocus={() => setShowDropdown(true)}
						autoComplete='off'
					/>
				</label>
				<button
					type='button'
					className={`breed-selector__input-button ${showDropdown ? 'open' : ''}`}
					onClick={() => {
						setSearch('');
						dispatch(clearState());
					}}
				>
					<img src={clean} alt='clean' />
				</button>
			</div>
			<div className='breed-selector__list'>
				{showDropdown && (
					<ul className='breed-selector__list--dropdown'>
						{Object.entries(breeds)
							.filter(([breed]) => breed.toLowerCase().includes(search.toLowerCase()))
							.map(([breed, values]) => (
								// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
								<li
									key={breed}
									className='breed-selector__list--dropdown-item'
									onMouseDown={() => {
										setSearch(breed);
										setShowDropdown(false);
									}}
								>
									<span>{breed}</span>
									<span>{values.subBreeds.length}</span>
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default BreedSelector;
