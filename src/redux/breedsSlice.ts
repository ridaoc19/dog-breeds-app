/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchBreeds, fetchImages, FetchImagesProps, fetchImagesRandom, fetchSubBreeds } from '../services/api';
import createAppSlice from './createAppSlice';
import type { RootState } from './store';

export interface InitialState {
	breeds: string[];
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
	breeds: [],
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
			state.images = [];
		}),
		postSelectedBreed: create.reducer((state, action: PayloadAction<string>) => {
			state.selectedBreed = action.payload;
			state.selectedSubBreed = '';
		}),
		postSelectedSubBreed: create.reducer((state, action: PayloadAction<string>) => {
			state.selectedSubBreed = action.payload;
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
					state.status.isLoading = false;
					state.breeds = breeds;
					state.imageRandom = [imageRandom];
				},
				rejected: state => {
					state.status.isError = true;
				},
			}
		),
		getSubBreeds: create.asyncThunk(
			async (selectedBreed: string) => {
				const response = await fetchSubBreeds({ selectedBreed });
				return response;
			},
			{
				pending: state => {
					state.status.isLoading = true;
				},
				fulfilled: (state, action) => {
					state.status.isLoading = false;
					state.subBreeds = action.payload;
				},
				rejected: state => {
					state.status.isError = true;
				},
			}
		),
		getBreedImages: create.asyncThunk(
			async ({ breed, imageCount, subBreed }: FetchImagesProps) => {
				const response = await fetchImages({ breed, subBreed, imageCount });
				return response;
			},
			{
				pending: state => {
					state.status.isLoading = true;
				},
				fulfilled: (state, action) => {
					state.status.isLoading = false;
					state.images = action.payload;
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
	getSubBreeds,
	postSelectedImageCount,
	postSelectedBreed,
	postSelectedSubBreed,
	getBreedImages,
	clearState,
} = breedsSlice.actions;
export const selectBreedsState = (state: RootState) => state.breeds;
