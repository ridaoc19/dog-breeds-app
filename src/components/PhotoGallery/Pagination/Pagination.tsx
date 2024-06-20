interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
	const handleNextPage = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const handlePageNumberClick = (pageNumber: number) => {
		onPageChange(pageNumber);
	};

	return (
		<div className='pagination'>
			<button type='button' onClick={handlePreviousPage} disabled={currentPage === 1}>
				Anterior
			</button>
			{Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
				<button
					type='button'
					key={pageNumber}
					onClick={() => handlePageNumberClick(pageNumber)}
					className={pageNumber === currentPage ? 'active' : ''}
				>
					{pageNumber}
				</button>
			))}
			<button type='button' onClick={handleNextPage} disabled={currentPage === totalPages}>
				Siguiente
			</button>
		</div>
	);
}

export default Pagination;
