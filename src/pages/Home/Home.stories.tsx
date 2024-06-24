import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Home from './Home';
import Layout from '../../components/layout/Layout';

function HomeDocumentation() {
	return (
		<div style={{ display: 'grid' }}>
			<h1>Home</h1>
			<p>
				El componente <code>Home</code> es la página principal que incluye el <code>FilterPanel</code> y el{' '}
				<code>PhotoGallery</code>.
			</p>
			<h3>Props</h3>
			<p>Este componente no recibe props directamente.</p>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>FilterPanel</strong>: Un componente que permite seleccionar una raza, una subraza y el número de
					imágenes a mostrar.
				</li>
				<li>
					<strong>PhotoGallery</strong>: Un componente que muestra una galería de fotos basado en las selecciones del{' '}
					<code>FilterPanel</code>.
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
					Este componente utiliza Redux para gestionar el estado. Asegúrate de envolver el componente en un{' '}
					<code>Provider</code> de Redux.
				</li>
				<li>
					El <code>useEffect</code> en el componente se encarga de despachar la acción <code>getBreeds</code> cuando el
					componente se monta.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del componente <code>Home</code>, se han incluido las
				siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de Home</strong>: Se verifica que el componente se renderice correctamente.
				</li>
				<li>
					<strong>Interacción con FilterPanel</strong>: Se verifica que se puedan seleccionar opciones en el{' '}
					<code>FilterPanel</code>.
				</li>
				<li>
					<strong>Interacción con PhotoGallery</strong>: Se verifica que la galería de fotos se actualice según las
					selecciones del <code>FilterPanel</code>.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>Home</code> se rendericen y funcionen correctamente.
				Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof Home> = {
	title: 'pages/Home',
	component: Home,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<Layout>
				<Story />
			</Layout>
		),
	],
	parameters: {
		docs: {
			page: () => <HomeDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Homes: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const filterPanel = canvas.getByText('Seleccione o busca una raza:');
		expect(filterPanel).toBeInTheDocument();

		const countElement = canvas.getByTestId('count');
		expect(countElement).toBeInTheDocument();

		const galleryElement = canvas.getByTestId('gallery');
		expect(galleryElement).toBeInTheDocument();

		const paginationElement = await canvas.findAllByTestId('pagination');
		expect(paginationElement.length).toBeGreaterThan(0);
	},
};
