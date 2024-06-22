export const fetchBreeds = async () => {
	try {
		const response = await fetch('https://dog.ceo/api/breeds/list/all');
		const data: FetchBreeds = await response.json();
		return data.message;
	} catch (err) {
		throw Error('Failed to load breeds. Please try again.');
	}
};

export interface FetchImagesProps {
	breed: string;
	subBreed: string;
}
export const fetchImages = async ({ breed, subBreed }: FetchImagesProps) => {
	try {
		const breedPath = subBreed ? `${breed}/${subBreed}` : breed;
		const response = await fetch(`https://dog.ceo/api/breed/${breedPath}/images`);
		const data: FetchImages = await response.json();

		return data.message;
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
