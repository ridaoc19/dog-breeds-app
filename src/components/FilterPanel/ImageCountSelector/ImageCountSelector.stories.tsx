import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import ImageCountSelector from './ImageCountSelector';

function ImageCountSelectorDocumentation() {
	return (
		<div>
			<h1>ImageCountSelector</h1>
			<p>
				El componente <code>ImageCountSelector</code> permite seleccionar la cantidad de imágenes a mostrar, incluyendo
				una opción para mostrar Todos.
			</p>

			<h3>Props</h3>
			<p>Este componente recibe las siguientes props:</p>
			<ul>
				<li>
					<strong>setImageCount</strong>: Una función que se llama cuando se selecciona un número de imágenes, pasando
					el valor seleccionado como argumento. Si se selecciona All, el valor será -1.
				</li>
			</ul>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>Selector de Número de Imágenes</strong>: Un campo de selección donde se puede elegir la cantidad de
					imágenes a mostrar.
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
					La función <code>setImageCount</code> debe manejar la lógica de lo que sucede cuando se selecciona un número
					de imágenes.
				</li>
				<li>
					Si se selecciona All, el valor pasado a <code>setImageCount</code> será -1.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del componente <code>ImageCountSelector</code>, se han
				incluido las siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de ImageCountSelector</strong>: Se verifica que el componente se renderice
					correctamente.
				</li>
				<li>
					<strong>Selección de Cantidad de Imágenes</strong>: Se verifica que se pueda seleccionar una cantidad de
					imágenes y que la función <code>setImageCount</code> se llame con el valor correcto.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>ImageCountSelector</code> se rendericen y funcionen
				correctamente. Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof ImageCountSelector> = {
	title: 'components/FilterPanel/ImageCountSelector',
	component: ImageCountSelector,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <ImageCountSelectorDocumentation />,
		},
	},
	argTypes: {
		setImageCount: { action: 'setImageCount' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const imageCountSelect = canvas.getByLabelText(/Numero de imágenes/i);
		expect(imageCountSelect).toBeInTheDocument();

		await userEvent.type(imageCountSelect, '20');
	},
};
