import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { selectedImageCount, selectImageCount } from '../../../redux/breedsSlice';

function ImageCountSelector() {
	const dispatch = useAppDispatch();
	const imagesCount = useAppSelector(selectImageCount);
	return (
		<div className='image-count-selector'>
			<label htmlFor='imageCount'>
				Numero de imágenes:
				<select
					id='imageCount'
					onChange={e => dispatch(selectedImageCount(Number(e.target.value)))}
					defaultValue={imagesCount}
					className='image-count-selector__select'
				>
					<option value={10}>10</option>
					<option value={20}>20</option>
					<option value={50}>50</option>
					<option value={0}>All</option>
				</select>
			</label>
		</div>
	);
}

export default ImageCountSelector;
