import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Layout from './Layout';

function LayoutDocumentation() {
	return (
		<div>
			<h1>Layout</h1>
			<p>
				El componente <code>Layout</code> define la estructura general de la aplicación, incluyendo áreas de navegación
				y contenido.
			</p>

			<h3>Props</h3>
			<p>Este componente recibe las siguientes props:</p>
			<ul>
				<li>
					<strong>children</strong>: Un ReactNode que representa el contenido que se renderizará dentro del layout.
				</li>
			</ul>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>Navbar</strong>: La barra de navegación que se muestra en la parte superior de la aplicación,
					proporcionada por el componente <code>Navbar</code>.
				</li>
				<li>
					<strong>Children</strong>: El área de contenido principal, donde se renderiza el contenido pasado como props.
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
					El componente <code>Layout</code> está diseñado para proporcionar una estructura de diseño consistente en toda
					la aplicación, mejorando la experiencia del usuario y la navegación.
				</li>
				<li>
					Se recomienda utilizar técnicas de diseño responsivo para asegurar que el layout se adapte correctamente a
					diferentes tamaños de pantalla y dispositivos.
				</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del componente <code>Layout</code>, se han incluido las
				siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de Layout</strong>: Se verifica que el componente se este renderizando correctamente
					correctamente los children pasados al componente Layout.
				</li>
				<li>
					<strong>Renderización del Navbar</strong>: Se verifica que el Navbar se renderice correctamente.
				</li>
				<li>
					<strong>Renderización de los Children</strong>: Se verifica que el área de contenido principal renderice
					correctamente los children pasados al componente Layout.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>Layout</code> se rendericen y funcionen
				correctamente. Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof Layout> = {
	title: 'components/Layout',
	component: Layout,
	tags: ['autodocs'],
	parameters: {
		componentSubtitle: 'Layout',
		docs: {
			page: () => <LayoutDocumentation />,
		},
	},
	argTypes: {
		children: {
			control: { type: 'object' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Layouts: Story = {
	args: {
		children: null,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const layoutElement = canvas.getByTestId('layout');
		expect(layoutElement).toBeInTheDocument();

		const navbarElement = canvasElement.querySelector('.navbar');
		expect(navbarElement).toBeInTheDocument();

		const childrenElement = canvas.getByTestId('layout-children');
		expect(childrenElement).toBeInTheDocument();
	},
};
