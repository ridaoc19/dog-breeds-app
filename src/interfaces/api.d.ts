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
