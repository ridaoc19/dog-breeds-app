import { useEffect, useState } from 'react';
import clean from '../../../assets/clean.svg';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { clearState, getSubBreeds, postSelectedBreed, selectBreedsState } from '../../../redux/breedsSlice';

function BreedSelector() {
	const [search, setSearch] = useState<string>('');
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { breeds } = useAppSelector(selectBreedsState);

	useEffect(() => {
		if (breeds.includes(search)) {
			dispatch(postSelectedBreed(search));
			dispatch(getSubBreeds(search));
		}
	}, [breeds, dispatch, search]);

	const handleSelectBreed = (breed: string) => {
		setSearch(breed);
		setShowDropdown(false);
	};

	return (
		<div className='breed-selector' data-testid='breed-selector'>
			<div className='breed-selector__input'>
				<label htmlFor='breedSelect' className='breed-selector__input-label'>
					Seleccione o busca una raza:
					<input
						id='breedSelect'
						value={search}
						onChange={e => {
							setSearch(e.target.value);
							setShowDropdown(true);
						}}
						onBlur={() => {
							// Small delay to allow clicking on dropdown item before it hides
							setTimeout(() => setShowDropdown(false), 100);
						}}
						onFocus={() => setShowDropdown(true)}
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
						{breeds
							.filter(breed => breed.toLowerCase().includes(search.toLowerCase()))
							.map(breed => (
								// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
								<li
									key={breed}
									className='breed-selector__list--dropdown-item'
									onMouseDown={() => handleSelectBreed(breed)}
								>
									{breed}
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	);
}

export default BreedSelector;
