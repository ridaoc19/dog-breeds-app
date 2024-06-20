interface ImageCountSelectorProps {
	setImageCount: (count: number | 'all') => void;
}

function ImageCountSelector({ setImageCount }: ImageCountSelectorProps) {
	return (
		<div className='image-count-selector'>
			<label htmlFor='imageCount'>
				Number of images:
				<select
					id='imageCount'
					onChange={e => setImageCount(e.target.value === 'all' ? 'all' : Number(e.target.value))}
					className='image-count-selector__select'
				>
					<option value={10}>10</option>
					<option value={20}>20</option>
					<option value={50}>50</option>
					<option value='all'>All</option>
				</select>
			</label>
		</div>
	);
}

export default ImageCountSelector;
