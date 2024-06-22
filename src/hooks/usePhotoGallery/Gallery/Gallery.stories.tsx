import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Gallery from './Gallery';
import { images } from '../../../../.storybook/data';

function GalleryDocumentation() {
	return (
		<div>
			<h1>Gallery</h1>
			<p>
				El componente <code>Gallery</code> se utiliza para mostrar una galería de fotos con un estado de carga. Utiliza
				los componentes <code>Card</code> y <code>Loading</code>.
			</p>

			<h3>Props</h3>
			<p>Este componente recibe las siguientes props:</p>
			<ul>
				<li>
					<strong>isLoading</strong>: Un booleano que indica si la galería está en estado de carga.
				</li>
				<li>
					<strong>images</strong>: Un array de URLs de las imágenes que se mostrarán en la galería.
				</li>
				<li>
					<strong>isRandom</strong>: Un booleano que indica si las imágenes son aleatorias.
				</li>
			</ul>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>Loading</strong>: Muestra un componente de carga mientras se están obteniendo las imágenes.
				</li>
				<li>
					<strong>Cards</strong>: Muestra las imágenes en componentes <code>Card</code> una vez que se han cargado.
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
					El componente <code>Gallery</code> es útil para mostrar una colección de fotos con un indicador de carga.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del componente <code>Gallery</code>, se han incluido las
				siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de Gallery</strong>: Se verifica que el componente se renderice correctamente.
				</li>
				<li>
					<strong>Estado de Carga</strong>: Se verifica que el estado de carga funcione correctamente.
				</li>
				<li>
					<strong>Renderización de las Tarjetas</strong>: Se verifica que las tarjetas de fotos se rendericen
					correctamente.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>Gallery</code> se rendericen y funcionen
				correctamente. Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof Gallery> = {
	title: 'hooks/usePhotoGallery/Gallery',
	component: Gallery,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <GalleryDocumentation />,
		},
	},
	argTypes: {
		isLoading: { control: 'boolean' },
		images: { control: 'object' },
		isRandom: { control: 'boolean' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Gallerys: Story = {
	args: {
		isLoading: false,
		images,
		isRandom: false,
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);

		const galleryElement = canvas.getByTestId('gallery');
		expect(galleryElement).toBeInTheDocument();

		if (!args.isLoading) {
			const cardElements = await canvas.findAllByTestId('card');
			expect(cardElements.length).toBe(args.images.length);
		} else {
			const loadingElement = canvas.getByTestId('loading');
			expect(loadingElement).toBeInTheDocument();
		}
	},
};
