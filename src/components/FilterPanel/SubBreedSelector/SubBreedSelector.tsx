interface SubBreedSelectorProps {
	subBreeds: string[];
	setSelectedSubBreed: (subBreed: string) => void;
}

function SubBreedSelector({ subBreeds, setSelectedSubBreed }: SubBreedSelectorProps) {
	return (
		<div className='sub-breed-selector' data-testid='sub-breed-selector'>
			<label htmlFor='subBreedSelect'>
				Select a sub-breed:
				<select
					id='subBreedSelect'
					onChange={e => setSelectedSubBreed(e.target.value)}
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
