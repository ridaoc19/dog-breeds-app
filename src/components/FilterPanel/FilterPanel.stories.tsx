import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import FilterPanel from './FilterPanel';

function FilterPanelDocumentation() {
	return (
		<div>
			<h1>FilterPanel</h1>
			<p>
				El componente <code>FilterPanel</code> permite seleccionar una raza, una subraza y el número de imágenes a
				mostrar.
			</p>
			<h3>Props</h3>
			<p>Este componente recibe las siguientes props:</p>
			<ul>
				<li>
					<strong>breeds</strong>: Un array de cadenas que representa las razas disponibles.
				</li>
				<li>
					<strong>subBreeds</strong>: Un array de cadenas que representa las subrazas disponibles.
				</li>
				<li>
					<strong>setSelectedBreed</strong>: Una función para establecer la raza seleccionada.
				</li>
				<li>
					<strong>setSelectedSubBreed</strong>: Una función para establecer la subraza seleccionada.
				</li>
				<li>
					<strong>setImageCount</strong>: Una función para establecer el número de imágenes a mostrar.
				</li>
			</ul>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>Selector de Raza</strong>: Un campo de selección donde se puede elegir una raza de la lista
					desplegable.
				</li>
				<li>
					<strong>Selector de Sub-Raza</strong>: Un campo de selección donde se puede elegir una sub-raza de la lista
					desplegable.
				</li>
				<li>
					<strong>Selector de Cantidad de Imágenes</strong>: Un campo de selección donde se puede elegir la cantidad de
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
					Asegúrate de proporcionar un array de razas (<code>breeds</code>) y sub-razas (<code>subBreeds</code>) para
					que el componente funcione correctamente.
				</li>
				<li>
					La función <code>setSelectedBreed</code> debe manejar la lógica de lo que sucede cuando se selecciona una
					raza.
				</li>
				<li>
					La función <code>setSelectedSubBreed</code> debe manejar la lógica de lo que sucede cuando se selecciona una
					sub-raza.
				</li>
				<li>
					La función <code>setImageCount</code> debe manejar la lógica de lo que sucede cuando se selecciona la cantidad
					de imágenes a mostrar.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del componente <code>FilterPanel</code>, se han incluido
				las siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de FilterPanel</strong>: Se verifica que el componente se renderice correctamente.
				</li>
				<li>
					<strong>Selección de Raza</strong>: Se verifica que se pueda seleccionar una raza y que la función{' '}
					<code>setSelectedBreed</code> se llame con el valor correcto.
				</li>
				<li>
					<strong>Selección de Sub-Raza</strong>: Se verifica que se pueda seleccionar una sub-raza y que la función{' '}
					<code>setSelectedSubBreed</code> se llame con el valor correcto.
				</li>
				<li>
					<strong>Selección de Cantidad de Imágenes</strong>: Se verifica que se pueda seleccionar la cantidad de
					imágenes y que la función <code>setImageCount</code> se llame con el valor correcto.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>FilterPanel</code> se rendericen y funcionen
				correctamente. Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof FilterPanel> = {
	title: 'components/FilterPanel',
	component: FilterPanel,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <FilterPanelDocumentation />,
		},
	},
	argTypes: {
		breeds: { control: 'object' },
		subBreeds: { control: 'object' },
		setSelectedBreed: { action: 'setSelectedBreed' },
		setSelectedSubBreed: { action: 'setSelectedSubBreed' },
		setImageCount: { action: 'setImageCount' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FiltersPanel: Story = {
	args: {
		breeds: ['bulldog', 'poodle', 'retriever'],
		subBreeds: ['french', 'english', 'toy'],
	},
	play: async ({ canvasElement, argTypes }) => {
		const canvas = within(canvasElement);

		const breedSelect = canvas.getByLabelText(/select a breed/i);
		expect(breedSelect).toBeInTheDocument();

		await userEvent.selectOptions(breedSelect, 'bulldog');
		expect(argTypes.setSelectedBreed.action).toHaveBeenCalledWith('bulldog');

		const subBreedSelect = canvas.getByLabelText(/select a sub-breed/i);
		expect(subBreedSelect).toBeInTheDocument();

		await userEvent.selectOptions(subBreedSelect, 'french');
		expect(argTypes.setSelectedSubBreed.action).toHaveBeenCalledWith('french');

		const imageCountSelect = canvas.getByLabelText(/number of images/i);
		expect(imageCountSelect).toBeInTheDocument();

		await userEvent.selectOptions(imageCountSelect, '20');
		expect(argTypes.setImageCount.action).toHaveBeenCalledWith(20);
	},
};
