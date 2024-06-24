import { useMemo } from 'react';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { postSelectedImageCount, selectBreedsState } from '../../../redux/breedsSlice';

function ImageCountSelector() {
	const dispatch = useAppDispatch();
	const { selectedImageCount, selectedBreed, selectedSubBreed } = useAppSelector(selectBreedsState);
	const total = useMemo(() => {
		return selectedImageCount;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedBreed, selectedSubBreed]);

	return (
		<div className='image-count-selector'>
			<label htmlFor='imageCount' className='breed-selector__label'>
				Ingresa número de imágenes que deseas ver:
				<input
					id='imageCount'
					type='number'
					value={selectedImageCount}
					onChange={e => {
						if (Number(e.target.value) <= total) {
							dispatch(postSelectedImageCount(Number(e.target.value)));
						}
					}}
					className='image-count-selector__select'
					disabled={!selectedBreed}
					min={0}
				/>
			</label>
		</div>
	);
}

export default ImageCountSelector;
