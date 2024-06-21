import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Loading from './Loading';

function LoadingDocumentation() {
	return (
		<div>
			<h1>Loading</h1>
			<p>
				El componente <code>Loading</code> muestra una animación de carga para indicar que el contenido se está
				cargando.
			</p>

			<h3>Props</h3>
			<p>Este componente no requiere props.</p>

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
					El componente <code>Loading</code> es un componente puramente visual destinado a proporcionar
					retroalimentación a los usuarios durante la obtención de datos u otras operaciones asincrónicas.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para asegurar la calidad y el correcto funcionamiento del componente <code>Loading</code>, se han incluido las
				siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización del Loading</strong>: Verifica que el texto de carga se renderice correctamente.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que el componente <code>Loading</code> se renderice adecuadamente y proporcione la
				retroalimentación visual prevista. Puedes verificar estas pruebas en la sección de <code>Interactions</code>.
			</p>
		</div>
	);
}
const meta: Meta<typeof Loading> = {
	title: 'components/Loading',
	component: Loading,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <LoadingDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Loadings: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const loadingText = canvas.getByTestId('loading');
		expect(loadingText).toBeInTheDocument();
	},
};
