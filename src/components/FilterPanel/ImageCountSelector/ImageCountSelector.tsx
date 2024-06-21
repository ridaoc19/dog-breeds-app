import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { postSelectedImageCount, selectBreedsState } from '../../../redux/breedsSlice';

function ImageCountSelector() {
	const dispatch = useAppDispatch();
	const { selectedImageCount } = useAppSelector(selectBreedsState);

	return (
		<div className='image-count-selector'>
			<label htmlFor='imageCount'>
				Numero de imágenes:
				<select
					id='imageCount'
					onChange={e => dispatch(postSelectedImageCount(Number(e.target.value)))}
					defaultValue={selectedImageCount}
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
