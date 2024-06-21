export const fetchBreeds = async () => {
	try {
		const response = await fetch('https://dog.ceo/api/breeds/list/all');
		const data: FetchBreeds = await response.json();
		return Object.keys(data.message);
	} catch (err) {
		throw Error('Failed to load breeds. Please try again.');
	}
};

export const fetchSubBreeds = async ({ selectedBreed }: { selectedBreed: string }) => {
	try {
		const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/list`);
		const data: FetchSubBreeds = await response.json();
		if (Array.isArray(data.message)) {
			return data.message;
		}
		throw new Error('Unexpected response format');
	} catch (err) {
		throw new Error('Failed to load sub-breeds. Please try again.');
	}
};

export interface FetchImagesProps {
	breed: string;
	subBreed: string;
	imageCount: number;
}
export const fetchImages = async ({ breed, subBreed, imageCount }: FetchImagesProps) => {
	try {
		const breedPath = subBreed ? `${breed}/${subBreed}` : breed;
		const response = await fetch(`https://dog.ceo/api/breed/${breedPath}/images`);
		const data: FetchImages = await response.json();

		if (Array.isArray(data.message)) {
			if (imageCount === 0) {
				return data.message;
			}
			return data.message.slice(0, imageCount);
		}
		throw new Error('Unexpected response format');
	} catch (err) {
		throw new Error('Failed to load images. Please try again.');
	}
};

export const fetchImagesRandom = async () => {
	try {
		const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
		const data: FetchImagesRandom = await response.json();
		return data.message;
	} catch (err) {
		throw new Error('Failed to load images. Please try again.');
	}
};
