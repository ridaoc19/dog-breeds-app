function Card({ image, altText }: { image: string; altText: string }) {
	return (
		<div className='card' data-testid='card'>
			<img src={image} alt={altText} className='card__image' />
		</div>
	);
}

export default Card;
