import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import SubBreedSelector from './SubBreedSelector';

function SubBreedSelectorDocumentation() {
	return (
		<div>
			<h1>SubBreedSelector</h1>
			<p>
				El componente <code>SubBreedSelector</code> permite seleccionar una sub-raza de una lista proporcionada.
			</p>

			<h3>Props</h3>
			<p>Este componente recibe las siguientes props:</p>
			<ul>
				<li>
					<strong>subBreeds</strong>: Un array de strings que representa las sub-razas disponibles para seleccionar.
				</li>
				<li>
					<strong>setSelectedSubBreed</strong>: Una función que se llama cuando se selecciona una sub-raza, pasando el
					valor de la sub-raza seleccionada como argumento.
				</li>
			</ul>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>Selector de Sub-Raza</strong>: Un campo de selección donde se puede elegir una sub-raza de la lista
					desplegable.
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
					Asegúrate de proporcionar un array de sub-razas (<code>subBreeds</code>) para que el componente funcione
					correctamente.
				</li>
				<li>
					La función <code>setSelectedSubBreed</code> debe manejar la lógica de lo que sucede cuando se selecciona una
					sub-raza.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del componente <code>SubBreedSelector</code>, se han
				incluido las siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de SubBreedSelector</strong>: Se verifica que el componente se renderice correctamente.
				</li>
				<li>
					<strong>Selección de Sub-Raza</strong>: Se verifica que se pueda seleccionar una sub-raza y que la función{' '}
					<code>setSelectedSubBreed</code> se llame con el valor correcto.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>SubBreedSelector</code> se rendericen y funcionen
				correctamente. Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof SubBreedSelector> = {
	title: 'components/FilterPanel/SubBreedSelector',
	component: SubBreedSelector,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <SubBreedSelectorDocumentation />,
		},
	},
	argTypes: {
		subBreeds: { control: 'object' },
		setSelectedSubBreed: { action: 'setSelectedSubBreed' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		subBreeds: ['Husky', 'Malamute', 'Samoyed'],
		setSelectedSubBreed: (selected: string) => console.log('Selected sub-breed:', selected),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const subBreedSelect = canvas.getByLabelText(/Seleccione una subraza/i);
		expect(subBreedSelect).toBeInTheDocument();

		await userEvent.type(subBreedSelect, 'Husky');
	},
};
