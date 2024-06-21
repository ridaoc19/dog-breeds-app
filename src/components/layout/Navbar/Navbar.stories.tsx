import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/test';

import logo from '../../../assets/logo.svg';
import Navbar from './Navbar';

function NavbarDocumentation() {
	return (
		<div>
			<h1>Navbar</h1>
			<p>
				El componente <code>Navbar</code> es una barra de navegación que se muestra en la parte superior de la
				aplicación.
			</p>

			<h3>Props</h3>
			<p>Este componente no recibe props.</p>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>Logo</strong>: logo principal de la página.(SVG).
				</li>
			</ul>

			<h3>Ejemplo de Uso</h3>
			<pre>
				<code>
					<Primary />
					<Controls />
				</code>
			</pre>

			<h3>Pruebas</h3>
			<p>
				Para asegurar la calidad y el correcto funcionamiento del componente <code>Navbar</code>, se han incluido las
				siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización Navbar</strong>: verifica que el componente se renderice correctamente.
				</li>
				<li>
					<strong>Renderización del Logo</strong>: Se verifica que el logo del <code>Navbar</code> se renderiza
					correctamente.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>Navbar</code> se rendericen y funcionen
				correctamente. Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof Navbar> = {
	title: 'components/layout/Navbar',
	component: Navbar,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <NavbarDocumentation />,
		},
	},
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Navbars: Story = {
	play: async ({ canvasElement }) => {
		const navbarElement = canvasElement.querySelector('.navbar');
		expect(navbarElement).toBeInTheDocument();

		const logoElement = canvasElement.querySelector('.navbar__logo img');
		expect(logoElement).toBeInTheDocument();
		expect(logoElement?.getAttribute('src')).toEqual(logo);
	},
};
