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

export const all = [
	'affenpinscher',
	'african',
	'airedale',
	'akita',
	'appenzeller',
	'australian',
	'bakharwal',
	'basenji',
	'beagle',
	'bluetick',
	'borzoi',
	'bouvier',
	'boxer',
	'brabancon',
	'briard',
	'buhund',
	'bulldog',
	'bullterrier',
	'cattledog',
	'cavapoo',
	'chihuahua',
	'chippiparai',
	'chow',
	'clumber',
	'cockapoo',
	'collie',
	'coonhound',
	'corgi',
	'cotondetulear',
	'dachshund',
	'dalmatian',
	'dane',
	'danish',
	'deerhound',
	'dhole',
	'dingo',
	'doberman',
	'elkhound',
	'entlebucher',
	'eskimo',
	'finnish',
	'frise',
	'gaddi',
	'germanshepherd',
	'greyhound',
	'groenendael',
	'havanese',
	'hound',
	'husky',
	'keeshond',
	'kelpie',
	'kombai',
	'komondor',
	'kuvasz',
	'labradoodle',
	'labrador',
	'leonberg',
	'lhasa',
	'malamute',
	'malinois',
	'maltese',
	'mastiff',
	'mexicanhairless',
	'mix',
	'mountain',
	'mudhol',
	'newfoundland',
	'otterhound',
	'ovcharka',
	'papillon',
	'pariah',
	'pekinese',
	'pembroke',
	'pinscher',
	'pitbull',
	'pointer',
	'pomeranian',
	'poodle',
	'pug',
	'puggle',
	'pyrenees',
	'rajapalayam',
	'redbone',
	'retriever',
	'ridgeback',
	'rottweiler',
	'saluki',
	'samoyed',
	'schipperke',
	'schnauzer',
	'segugio',
	'setter',
	'sharpei',
	'sheepdog',
	'shiba',
	'shihtzu',
	'spaniel',
	'spitz',
	'springer',
	'stbernard',
	'terrier',
	'tervuren',
	'vizsla',
	'waterdog',
	'weimaraner',
	'whippet',
	'wolfhound',
];

export const dogs = 'australian';

export const sub = ['kelpie', 'shepherd'];

export const images = [
	'https://images.dog.ceo/breeds/australian-kelpie/IMG_2599.jpg',
	'https://images.dog.ceo/breeds/australian-kelpie/IMG_3675.jpg',
	'https://images.dog.ceo/breeds/australian-kelpie/IMG_4918.jpg',
	'https://images.dog.ceo/breeds/australian-kelpie/IMG_7387.jpg',
	'https://images.dog.ceo/breeds/australian-kelpie/Resized_20200214_191118_346649120350209.jpg',
	'https://images.dog.ceo/breeds/australian-kelpie/Resized_20200303_233358_108952253645051.jpg',
	'https://images.dog.ceo/breeds/australian-kelpie/Resized_20200416_142905_108884348190285.jpg',
	'https://images.dog.ceo/breeds/australian-kelpie/Resized_20201114_133404_109264920155921.jpg',
	'https://images.dog.ceo/breeds/australian-shepherd/forest.jpg',
	'https://images.dog.ceo/breeds/australian-shepherd/leroy.jpg',
];
