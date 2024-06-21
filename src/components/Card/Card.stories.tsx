import { Controls, Primary } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Card from './Card';
import { images } from '../../services/api';

function CardDocumentation() {
	return (
		<div>
			<h1>Card</h1>
			<p>
				El componente <code>Card</code> se utiliza para mostrar una imagen en una tarjeta estilizada.
			</p>

			<h3>Props</h3>
			<p>Este componente recibe las siguientes props:</p>
			<ul>
				<li>
					<strong>image</strong>: Una URL de imagen que se mostrará en la tarjeta.
				</li>
				<li>
					<strong>altText</strong>: Una cadena de texto que representa el texto alternativo para la imagen.
				</li>
			</ul>

			<h3>Contenido</h3>
			<ul>
				<li>
					<strong>Image</strong>: La imagen que se muestra en la tarjeta.
				</li>
				<li>
					<strong>Alt Text</strong>: El texto alternativo de la imagen.
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
					El componente <code>Card</code> es útil para mostrar contenido visual destacado.
				</li>
				<li>Asegúrate de proporcionar un texto alternativo descriptivo para mejorar la accesibilidad.</li>
			</ul>

			<h3>Pruebas</h3>
			<p>
				Para garantizar la calidad y el correcto funcionamiento del componente <code>Card</code>, se han incluido las
				siguientes pruebas:
			</p>
			<ul>
				<li>
					<strong>Renderización de Card</strong>: Se verifica que el componente se renderice correctamente.
				</li>
				<li>
					<strong>Renderización de la Imagen</strong>: Se verifica que la imagen se renderice correctamente.
				</li>
				<li>
					<strong>Renderización del Alt Text</strong>: Se verifica que el texto alternativo de la imagen se renderice
					correctamente.
				</li>
			</ul>
			<p>
				Estas pruebas aseguran que los elementos críticos del <code>Card</code> se rendericen y funcionen correctamente.
				Se puede verificar en <code>Interactions</code>.
			</p>
		</div>
	);
}

const meta: Meta<typeof Card> = {
	title: 'components/Card',
	component: Card,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => <CardDocumentation />,
		},
	},
	argTypes: {
		image: { control: 'text' },
		altText: { control: 'text' },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Cards: Story = {
	args: {
		image: images[0],
		altText: 'Company logo',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const cardElement = canvas.getByTestId('card');
		expect(cardElement).toBeInTheDocument();

		const imageElement = canvas.getByRole('img');
		expect(imageElement).toBeInTheDocument();
		expect(imageElement).toHaveAttribute('src', images[0]);
		expect(imageElement).toHaveAttribute('alt', 'Company logo');
	},
};
