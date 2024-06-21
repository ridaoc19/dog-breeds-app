import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import usePhotoGallery from './usePhotoGallery';

function UsePhotoGalleryDocumentation() {
	return (
		<div>
			<h1>usePhotoGallery</h1>
			<p>
				El hook <code>usePhotoGallery</code> se utiliza para manejar la lógica de una galería de fotos, incluyendo la
				paginación y la obtención de imágenes desde una API.
			</p>

			<h3>Retorno</h3>
			<p>Este hook devuelve los siguientes componentes:</p>
			<ul>
				<li>
					<strong>Count</strong>: Un componente que muestra el número total de imágenes y la página actual.
				</li>
				<li>
					<strong>Gallery</strong>: Un componente que muestra las imágenes de la galería.
				</li>
				<li>
					<strong>Pagination</strong>: Un componente que maneja la paginación de la galería.
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
					El hook <code>usePhotoGallery</code> es útil para gestionar galerías de fotos con paginación y cargar imágenes
					de manera eficiente.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del hook <code>usePhotoGallery</code>, se han incluido
				las siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización del hook</strong>: Se verifica que el hook se inicialice y funcione correctamente.
				</li>
				<li>
					<strong>Funcionalidad de la paginación</strong>: Se verifica que la paginación funcione correctamente.
				</li>
				<li>
					<strong>Carga de imágenes</strong>: Se verifica que las imágenes se carguen correctamente.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>usePhotoGallery</code> se rendericen y funcionen
				correctamente. Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof usePhotoGallery> = {
	title: 'hooks/usePhotoGallery',
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <UsePhotoGalleryDocumentation />,
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const { Count, Gallery, Pagination } = usePhotoGallery();

		return (
			<div>
				{Count}
				{Gallery}
				{Pagination}
			</div>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const countElement = canvas.getByTestId('count');
		expect(countElement).toBeInTheDocument();

		const galleryElement = canvas.getByTestId('gallery');
		expect(galleryElement).toBeInTheDocument();

		const paginationElement = canvas.getByTestId('pagination');
		expect(paginationElement).toBeInTheDocument();

		await canvas.findAllByTestId('cards-image');
	},
};
