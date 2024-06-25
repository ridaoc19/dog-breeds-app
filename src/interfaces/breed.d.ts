declare namespace DogsBreed {
	interface Breeds {
		[breeds: Breed]: {
			subBreeds: SubBreed[];
			images: Image[];
		};
	}

	type Breed = string;
	type SubBreed = string;
	interface Image {
		breed: string;
		subBreed: string;
		image: string;
		favorite: boolean;
	}
}

declare namespace Api {
	interface FetchBreeds {
		message: {
			[breed: string]: string[];
		};
		status: string;
	}

	interface FetchSubBreeds {
		message: string[];
		status: string;
	}
	interface FetchImages {
		message: string[];
		status: string;
	}

	interface FetchImagesRandom {
		message: string;
		status: string;
	}
}
