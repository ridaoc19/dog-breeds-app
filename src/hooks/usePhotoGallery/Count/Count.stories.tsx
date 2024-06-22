import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Count from './Count';

function CountDocumentation() {
	return (
		<div>
			<h1>Count</h1>
			<p>
				El componente <code>Count</code> se utiliza para mostrar el número total de imágenes y la página actual de una
				galería de fotos.
			</p>

			<h3>Props</h3>
			<p>Este componente recibe las siguientes props:</p>
			<ul>
				<li>
					<strong>currentPage</strong>: Un número que representa la página actual.
				</li>
				<li>
					<strong>totalPages</strong>: Un número que representa el total de páginas.
				</li>
				<li>
					<strong>totalImages</strong>: Un número que representa el total de imágenes.
				</li>
			</ul>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>Total:</strong> Muestra el total de imágenes.
				</li>
				<li>
					<strong>Página:</strong> Muestra la página actual y el total de páginas.
				</li>
			</ul>

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
					El componente <code>Count</code> es útil para mostrar información de paginación en una galería de fotos.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del componente <code>Count</code>, se han incluido las
				siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de Count</strong>: Se verifica que el componente se renderice correctamente.
				</li>
				<li>
					<strong>Mostrar Total de Imágenes</strong>: Se verifica que el total de imágenes se muestre correctamente.
				</li>
				<li>
					<strong>Mostrar Paginación</strong>: Se verifica que la paginación se muestre correctamente.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>Count</code> se rendericen y funcionen
				correctamente. Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof Count> = {
	title: 'hooks/usePhotoGallery/Count',
	component: Count,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <CountDocumentation />,
		},
	},
	argTypes: {
		currentPage: { control: 'number' },
		totalPages: { control: 'number' },
		totalImages: { control: 'number' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		currentPage: 1,
		totalPages: 10,
		totalImages: 100,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const countElement = canvas.getByTestId('count');
		expect(countElement).toBeInTheDocument();

		const totalImagesElement = canvas.getByText(/Total/i);
		expect(totalImagesElement).toBeInTheDocument();

		const paginationElement = canvas.getByText(/Pagina/i);
		expect(paginationElement).toBeInTheDocument();
	},
};
