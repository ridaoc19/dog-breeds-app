interface PaginationProps {
	handlePreviousPage: () => void;
	handleNextPage: () => void;
	handleClickPagination: (selectedValue: number) => void;
	disableBack: boolean;
	disableNext: boolean;
	paginationTotal: number;
	currentIndex: number;
}

function Pagination({
	handlePreviousPage,
	handleNextPage,
	handleClickPagination,
	disableBack,
	disableNext,
	paginationTotal,
	currentIndex,
}: PaginationProps) {
	const visibleRange = 5;

	const startPage = Math.max(1, currentIndex - Math.floor(visibleRange / 2));
	const endPage = Math.min(paginationTotal, startPage + visibleRange - 1);

	return (
		<div className='pagination' data-testid='pagination'>
			<button type='button' className='pagination__button' onClick={handlePreviousPage} disabled={disableBack}>
				&lt;
			</button>

			<div className='pagination__numbers'>
				{Array.from({ length: endPage - startPage + 1 }, (_, index) => {
					const pageNumber = startPage + index;
					return (
						<button
							type='button'
							key={pageNumber}
							className={`pagination__numbers-item ${pageNumber === currentIndex ? 'pagination__numbers-selected' : ''}`}
							onClick={() => handleClickPagination(pageNumber)}
						>
							{pageNumber}
						</button>
					);
				})}
			</div>

			<button type='button' className='pagination__button' onClick={handleNextPage} disabled={disableNext}>
				&gt;
			</button>
		</div>
	);
}

export default Pagination;
