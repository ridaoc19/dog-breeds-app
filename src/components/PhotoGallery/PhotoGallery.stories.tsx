import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import PhotoGallery from './PhotoGallery';
import { images } from '../../services/api';

function PhotoGalleryDocumentation() {
	return (
		<div>
			<h1>PhotoGallery</h1>
			<p>
				El componente <code>PhotoGallery</code> se utiliza para mostrar una galería de fotos utilizando el componente{' '}
				<code>Card</code>.
			</p>

			<h3>Props</h3>
			<p>Este componente recibe las siguientes props:</p>
			<ul>
				<li>
					<strong>photos</strong>: Un array de objetos que representan las fotos. Cada objeto contiene las siguientes
					propiedades:
					<ul>
						<li>
							<strong>image</strong>: Una URL de imagen que se mostrará en la tarjeta.
						</li>
						<li>
							<strong>breed</strong>: Una cadena de texto que representa la raza.
						</li>
						<li>
							<strong>subBreed</strong>: Una cadena de texto que representa la subraza.
						</li>
					</ul>
				</li>
			</ul>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>Photo Cards</strong>: Una lista de componentes <code>Card</code> que muestran las fotos.
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
					El componente <code>PhotoGallery</code> es útil para mostrar una colección de fotos de manera ordenada y
					estilizada.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del componente <code>PhotoGallery</code>, se han
				incluido las siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de PhotoGallery</strong>: Se verifica que el componente se renderice correctamente.
				</li>
				<li>
					<strong>Renderización de las Tarjetas</strong>: Se verifica que todas las tarjetas de fotos se rendericen
					correctamente.
				</li>
				<li>
					<strong>Propiedades de las Tarjetas</strong>: Se verifica que las propiedades de las tarjetas sean correctas.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>PhotoGallery</code> se rendericen y funcionen
				correctamente. Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof PhotoGallery> = {
	title: 'components/PhotoGallery',
	component: PhotoGallery,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <PhotoGalleryDocumentation />,
		},
	},
	argTypes: {
		photos: { control: 'object' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PhotosGallery: Story = {
	args: {
		photos: images.map(img => {
			return {
				image: img,
				breed: img,
				subBreed: img,
			};
		}),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const galleryElement = canvas.getByTestId('photo-gallery');
		expect(galleryElement).toBeInTheDocument();

		await canvas.findAllByTestId('cards-image');
	},
};
