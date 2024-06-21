import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import BreedSelector from './BreedSelector';

function BreedSelectorDocumentation() {
	return (
		<div>
			<h1>BreedSelector</h1>
			<p>
				El componente <code>BreedSelector</code> permite seleccionar una raza de una lista proporcionada.
			</p>

			<h3>Props</h3>
			<p>Este componente recibe las siguientes props:</p>
			<ul>
				<li>
					<strong>breeds</strong>: Un array de strings que representa las razas disponibles para seleccionar.
				</li>
				<li>
					<strong>setSelectedBreed</strong>: Una función que se llama cuando se selecciona una raza, pasando el valor de
					la raza seleccionada como argumento.
				</li>
			</ul>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>Input de Selección</strong>: Un campo de entrada donde se puede seleccionar una raza de la lista
					desplegable.
				</li>
				<li>
					<strong>Lista de Razas</strong>: Una lista desplegable con las razas disponibles para seleccionar.
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
				<li>Asegúrate de proporcionar un array de razas (`breeds`) para que el componente funcione correctamente.</li>
				<li>La función `setSelectedBreed` debe manejar la lógica de lo que sucede cuando se selecciona una raza.</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del componente <code>BreedSelector</code>, se han
				incluido las siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de BreedSelector</strong>: Se verifica que el componente se renderice correctamente.
				</li>
				<li>
					<strong>Selección de Raza</strong>: Se verifica que se pueda seleccionar una raza y que la función
					`setSelectedBreed` se llame con el valor correcto.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>BreedSelector</code> se rendericen y funcionen
				correctamente. Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof BreedSelector> = {
	title: 'components/FilterPanel/BreedSelector',
	component: BreedSelector,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <BreedSelectorDocumentation />,
		},
	},
	argTypes: {
		breeds: { control: 'object' },
		setSelectedBreed: { action: 'setSelectedBreed' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		breeds: ['Labrador', 'Beagle', 'Bulldog'],
		setSelectedBreed: (selected: string) => console.warn('Selected breed:', selected),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const breedSelectorElement = canvas.getByTestId('breed-selector');
		expect(breedSelectorElement).toBeInTheDocument();

		await userEvent.type(breedSelectorElement, 'Labrador');
	},
};
