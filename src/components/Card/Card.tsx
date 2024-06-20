function Card({ image, altText }: { image: string; altText: string }) {
	return (
		<div className='card' data-testid='card'>
			<div className='card__image'>
				<img src={image} alt={altText} />
			</div>
		</div>
	);
}

export default Card;
