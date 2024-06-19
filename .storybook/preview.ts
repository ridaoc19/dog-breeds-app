import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import '../src/styles/main/main.scss';
import '../src/styles/app/app.scss';

const preview: Preview = {
	parameters: {
		viewport: {
			viewports: {
				...INITIAL_VIEWPORTS,
				...MINIMAL_VIEWPORTS,
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
