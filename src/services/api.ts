const getCachedData = (key: string, expiryTime: number = 24 * 60 * 60 * 1000) => {
	const cached = localStorage.getItem(key);
	if (cached) {
		const { data, timestamp } = JSON.parse(cached);
		if (Date.now() - timestamp < expiryTime) {
			return data;
		}
	}
	return null;
};

const setCachedData = (key: string, data: DogsBreed.Breeds) => {
	localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
};

// ! //////////////////////////

export const fetchBreeds = async (): Promise<DogsBreed.Breeds> => {
	const cached = getCachedData('breeds');
	if (cached) {
		return cached;
	}

	try {
		const response = await fetch('https://dog.ceo/api/breeds/list/all');
		const data: Api.FetchBreeds = await response.json();
		const breeds = Object.entries(data.message).reduce((acc, [breed, subBreeds]) => {
			acc[breed] = {
				subBreeds,
				images: [],
			};
			return acc;
		}, {} as DogsBreed.Breeds);
		setCachedData('breeds', breeds);
		return breeds;
	} catch (err) {
		throw new Error('Failed to load breeds. Please try again.');
	}
};

// ! //////////////////////////////////////////////////////////////
// export interface FetchImagesProps {
// 	breed: string;
// 	subBreed: string;
// }

// export interface Images extends FetchImagesProps {
// 	image: string;
// 	favorite: boolean;
// }

const normalizeString = (str: string) => str.trim().toLowerCase();

const getSubBreedFromUrl = (url: DogsBreed.Image['image'], subBreeds: DogsBreed.SubBreed[]) => {
	const normalizedUrl = normalizeString(url);
	const foundSubBreed = subBreeds.find(subBreed => normalizedUrl.includes(normalizeString(subBreed)));
	return foundSubBreed || '';
};

export const fetchImages = async ({
	breed,
	subBreed,
}: Pick<DogsBreed.Image, 'breed' | 'subBreed'>): Promise<{ breeds: DogsBreed.Breeds; breed: DogsBreed.Breed }> => {
	const cached: DogsBreed.Breeds = getCachedData('breeds') || {};

	if (cached[breed] && cached[breed].images.length > 0) {
		return { breeds: cached, breed };
	}

	try {
		const breedPath = subBreed ? `${breed}/${subBreed}` : breed;
		const response = await fetch(`https://dog.ceo/api/breed/${breedPath}/images`);
		const data: Api.FetchImages = await response.json();

		const updatedImages: DogsBreed.Image[] = data.message.map(image => ({
			breed,
			subBreed: getSubBreedFromUrl(image, cached[breed].subBreeds),
			image,
			favorite: false,
		}));

		cached[breed] = {
			...cached[breed],
			images: updatedImages,
		};

		setCachedData('breeds', cached);
		return { breeds: cached, breed };
	} catch (err) {
		throw new Error('Failed to load images. Please try again.');
	}
};

// ! ////////////////////////////////////////////////////////////////////7

export const toggleFavorite = ({
	breed,
	imageUrl,
}: {
	breed: DogsBreed.Breed;
	imageUrl: DogsBreed.Image['image'];
}): DogsBreed.Breeds => {
	const cached: DogsBreed.Breeds = getCachedData('breeds') || {};

	if (!cached[breed]) {
		throw new Error(`Breed ${breed} not found in cache.`);
	}

	const updatedImages = cached[breed].images.map(image =>
		image.image === imageUrl ? { ...image, favorite: !image.favorite } : image
	);

	cached[breed] = {
		...cached[breed],
		images: updatedImages,
	};

	setCachedData('breeds', cached);
	return cached;
};

// ! ////////////////////////////////////////////////////////////////////

export const getAllFavorites = (): DogsBreed.Image[] => {
	const cached: DogsBreed.Breeds = getCachedData('breeds') || {};

	const favorites: DogsBreed.Image[] = [];

	Object.values(cached).forEach(breedState => {
		breedState.images.forEach(image => {
			if (image.favorite) {
				favorites.push(image);
			}
		});
	});

	return favorites;
};

export const fetchImagesRandom = async () => {
	try {
		const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
		const data: Api.FetchImagesRandom = await response.json();
		return data.message;
	} catch (err) {
		throw new Error('Failed to load images. Please try again.');
	}
};
