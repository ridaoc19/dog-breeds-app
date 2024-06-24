import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { postSelectedImageCount, selectBreedsState } from '../../../redux/breedsSlice';

function ImageCountSelector() {
	const dispatch = useAppDispatch();
	const { selectedImageCount, images } = useAppSelector(selectBreedsState);

	return (
		<div className='image-count-selector'>
			<label htmlFor='imageCount' className='breed-selector__label'>
				Numero de imágenes que desea ver:
				<input
					id='imageCount'
					type='number'
					value={selectedImageCount}
					onChange={e => {
						if (Number(e.target.value) <= images.length + 1) {
							dispatch(postSelectedImageCount(Number(e.target.value)));
						}
					}}
					className='image-count-selector__select'
					disabled={images.length === 0}
					min={0}
					max={images.length}
				/>
			</label>
		</div>
	);
}

export default ImageCountSelector;
