import { Controls, Primary } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import Svg from './Svg';
import SvgType from './svgType';

function SvgDocumentation() {
	return (
		<div>
			<h1>Svg</h1>
			<p>
				El componente <code>Svg</code> renderiza íconos SVG basados en el tipo proporcionado.
			</p>

			<h3>Props</h3>
			<ul>
				<li>
					<strong>type</strong>: El tipo de ícono SVG que se va a renderizar.
				</li>
			</ul>

			<h3>Ejemplo de Uso</h3>
			<pre>
				<Primary />
				<Controls />
			</pre>

			<h3>Notas Adicionales</h3>
			<ul>
				<li>
					El componente <code>Svg</code> renderiza íconos SVG basados en el tipo proporcionado en las props.
				</li>
			</ul>
		</div>
	);
}

const meta: Meta<typeof Svg> = {
	title: 'components/icons',
	component: Svg,
	parameters: {
		docs: {
			page: () => <SvgDocumentation />,
		},
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			description: 'El tipo de icono',
			control: {
				type: 'select',
			},
			options: Object.values(SvgType),
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Svgs: Story = {
	args: {
		type: SvgType.Favorites,
	},
};
