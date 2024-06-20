interface BreedSelectorProps {
	breeds: string[];
	setSelectedBreed: (breed: string) => void;
}

function BreedSelector({ breeds, setSelectedBreed }: BreedSelectorProps) {
	return (
		<div className='breed-selector' data-testid='breed-selector'>
			<label htmlFor='breedSelect' className='breed-selector__label'>
				Select a breed:
				<input
					id='breedSelect'
					list='breeds'
					onChange={e => setSelectedBreed(e.target.value)}
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
