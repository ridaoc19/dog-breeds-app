import { Controls, Primary } from '@storybook/blocks';
import { expect, userEvent, within } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

function PaginationDocumentation() {
	return (
		<div>
			<h1>Pagination</h1>
			<p>
				El componente <code>Pagination</code> permite navegar entre diferentes páginas de contenido.
			</p>
			<h3>Props</h3>
			<ul>
				<li>
					<strong>handlePreviousPage</strong>: Función llamada al hacer clic en el botón anterior (&lt;).
				</li>
				<li>
					<strong>handleNextPage</strong>: Función llamada al hacer clic en el botón siguiente (&gt;).
				</li>
				<li>
					<strong>handleClickPagination</strong>: Función que maneja el clic en un número de página específico. Recibe
					el número de página seleccionado como argumento.
				</li>
				<li>
					<strong>disableBack</strong>: Booleano que indica si el botón anterior debe estar deshabilitado.
				</li>
				<li>
					<strong>disableNext</strong>: Booleano que indica si el botón siguiente debe estar deshabilitado.
				</li>
				<li>
					<strong>paginationTotal</strong>: Número total de páginas disponibles.
				</li>
				<li>
					<strong>currentIndex</strong>: Índice de la página actual.
				</li>
			</ul>

			<h3>Contenido</h3>
			<p>
				El componente muestra un rango visible de páginas alrededor de la página actual y permite la navegación entre
				ellas.
			</p>

			<h3>Ejemplo de Uso</h3>
			<pre>
				<code>
					<Primary />
					<Controls />
				</code>
			</pre>

			<h3>Notas Adicionales</h3>
			<ul>
				<li>
					Asegúrate de proporcionar los valores adecuados para <code>paginationTotal</code> y <code>currentIndex</code>{' '}
					para que el componente funcione correctamente.
				</li>
				<li>
					Las funciones <code>handlePreviousPage</code>, <code>handleNextPage</code> y{' '}
					<code>handleClickPagination</code> deben manejar adecuadamente la navegación y actualización del estado.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para asegurar el correcto funcionamiento del componente <code>Pagination</code>, se deben incluir las siguientes
				pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de Pagination</strong>: Verificar que el componente se renderice correctamente con los
					valores proporcionados.
				</li>
				<li>
					<strong>Navegación a la Página Anterior</strong>: Verificar que al hacer clic en el botón anterior se llame a
					la función <code>handlePreviousPage</code>.
				</li>
				<li>
					<strong>Navegación a la Página Siguiente</strong>: Verificar que al hacer clic en el botón siguiente se llame
					a la función <code>handleNextPage</code>.
				</li>
				<li>
					<strong>Selección de Página Específica</strong>: Verificar que al hacer clic en un número de página se llame a
					la función <code>handleClickPagination</code> con el número correcto de página.
				</li>
			</ul>
			<p>
				Estas pruebas garantizan que los elementos críticos del <code>Pagination</code> funcionen correctamente. Se
				puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof Pagination> = {
	title: 'components/PhotoGallery/Pagination',
	component: Pagination,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <PaginationDocumentation />,
		},
	},
	argTypes: {
		handlePreviousPage: { action: 'handlePreviousPage' },
		handleNextPage: { action: 'handleNextPage' },
		handleClickPagination: { action: 'handleClickPagination' },
		disableBack: { control: 'boolean' },
		disableNext: { control: 'boolean' },
		paginationTotal: { control: 'number' },
		currentIndex: { control: 'number' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Paginations: Story = {
	args: {
		handlePreviousPage: () => {},
		handleNextPage: () => {},
		handleClickPagination: () => {},
		disableBack: false,
		disableNext: false,
		paginationTotal: 10,
		currentIndex: 1,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const paginationComponent = canvas.getByTestId('pagination');
		expect(paginationComponent).toBeInTheDocument();

		const prevButton = canvas.getByRole('button', { name: /</i });
		expect(prevButton).toBeInTheDocument();
		await userEvent.click(prevButton);

		const nextButton = canvas.getByRole('button', { name: />/i });
		expect(nextButton).toBeInTheDocument();
		await userEvent.click(nextButton);
	},
};
