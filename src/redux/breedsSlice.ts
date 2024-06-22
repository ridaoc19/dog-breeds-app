/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchBreeds, fetchImages, FetchImagesProps, fetchImagesRandom } from '../services/api';
import createAppSlice from './createAppSlice';
import type { RootState } from './store';

export interface InitialState {
	breeds: {
		[breed: string]: string[];
	};
	subBreeds: string[];
	images: string[];
	imageRandom: string[];
	selectedBreed: string;
	selectedSubBreed: string;
	selectedImageCount: number;
	status: {
		isLoading: boolean;
		isError: boolean;
		error: string[];
	};
}

const initialState: InitialState = {
	breeds: {},
	subBreeds: [],
	images: [],
	imageRandom: [],
	selectedImageCount: 0,
	selectedBreed: '',
	selectedSubBreed: '',
	status: {
		isLoading: false,
		isError: false,
		error: [],
	},
};

export const breedsSlice = createAppSlice({
	name: 'breeds',
	initialState,
	reducers: create => ({
		clearState: create.reducer(state => {
			state.selectedBreed = '';
			state.selectedSubBreed = '';
			state.selectedImageCount = 0;
			state.subBreeds = [];
			state.images = [];
		}),
		postSelectedBreed: create.reducer((state, action: PayloadAction<string>) => {
			state.selectedBreed = action.payload;
			state.selectedSubBreed = '';
		}),
		postSelectedSubBreed: create.reducer((state, action: PayloadAction<string>) => {
			state.selectedSubBreed = action.payload;
		}),
		postSubBreed: create.reducer((state, action: PayloadAction<string[]>) => {
			state.subBreeds = action.payload;
		}),
		postSelectedImageCount: create.reducer((state, action: PayloadAction<number>) => {
			state.selectedImageCount = action.payload;
		}),
		getBreeds: create.asyncThunk(
			async () => {
				const [breedsResponse, imagesResponse] = await Promise.all([fetchBreeds(), fetchImagesRandom()]);
				return { breeds: breedsResponse, imageRandom: imagesResponse };
			},
			{
				pending: state => {
					state.status.isLoading = true;
				},
				fulfilled: (state, action) => {
					const {
						payload: { breeds, imageRandom },
					} = action;
					console.log(breeds);

					state.status.isLoading = false;
					state.breeds = breeds;
					state.imageRandom = [imageRandom];
				},
				rejected: state => {
					state.status.isError = true;
				},
			}
		),
		getBreedImages: create.asyncThunk(
			async ({ breed, subBreed }: FetchImagesProps) => {
				const response = await fetchImages({ breed, subBreed });
				return response;
			},
			{
				pending: state => {
					state.status.isLoading = true;
				},
				fulfilled: (state, action) => {
					state.status.isLoading = false;
					state.images = action.payload;
					state.selectedImageCount = action.payload.length;
				},
				rejected: state => {
					state.status.isError = true;
				},
			}
		),
	}),
});

export const {
	getBreeds,
	clearState,
	postSubBreed,
	getBreedImages,
	postSelectedBreed,
	postSelectedSubBreed,
	postSelectedImageCount,
} = breedsSlice.actions;
export const selectBreedsState = (state: RootState) => state.breeds;
