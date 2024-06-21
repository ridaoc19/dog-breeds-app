interface CountProps {
	currentPage: number;
	totalPages: number;
	totalImages: number;
}

export default function Count({ currentPage, totalPages, totalImages }: CountProps) {
	return (
		<div className='count'>
			<p>
				<strong>Total:</strong> {totalImages}
			</p>
			<p>
				<strong>Pagina:</strong> {currentPage}/{totalPages}
			</p>
		</div>
	);
}
