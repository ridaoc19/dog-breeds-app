import { PayloadAction } from '@reduxjs/toolkit';
import { fetchBreeds, fetchImages, FetchImagesProps, fetchImagesRandom, fetchSubBreeds } from '../services/api';
import { createAppSlice } from './createAppSlice';
import type { RootState } from './store';

export interface InitialState {
	breeds: string[];
	subBreeds: string[];
	images: string[];
	imageRandom: string;
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
	imageRandom: '',
	selectedImageCount: 0,
	selectedBreed: '',
	selectedSubBreed: '',
	status: {
		isLoading: false,
		isError: false,
		error: [],
	},
};

/* eslint-disable no-param-reassign */
export const breedsSlice = createAppSlice({
	name: 'breeds',
	initialState,
	reducers: create => ({
		selectedBreed: create.reducer((state, action: PayloadAction<string>) => {
			state.selectedBreed = action.payload;
			state.selectedSubBreed = '';
		}),
		selectedSubBreed: create.reducer((state, action: PayloadAction<string>) => {
			state.selectedSubBreed = action.payload;
		}),
		selectedImageCount: create.reducer((state, action: PayloadAction<number>) => {
			state.selectedImageCount = action.payload;
		}),
		getBreeds: create.asyncThunk(
			async () => {
				const response = await fetchBreeds();
				return response;
			},
			{
				pending: state => {
					state.status.isLoading = true;
				},
				fulfilled: (state, action) => {
					state.status.isLoading = false;
					state.breeds = action.payload;
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
		getBreedImageRandom: create.asyncThunk(
			async () => {
				const response = await fetchImagesRandom();
				return response;
			},
			{
				pending: state => {
					state.status.isLoading = true;
				},
				fulfilled: (state, action) => {
					state.status.isLoading = false;
					state.imageRandom = action.payload;
				},
				rejected: state => {
					state.status.isError = true;
				},
			}
		),
	}),
});

export const {
	getBreedImageRandom,
	getBreeds,
	getSubBreeds,
	selectedImageCount,
	selectedBreed,
	selectedSubBreed,
	getBreedImages,
} = breedsSlice.actions;
export const selectBreeds = (state: RootState) => state.breeds.breeds;
export const selectSubBreeds = (state: RootState) => state.breeds.subBreeds;
export const selectImages = (state: RootState) => state.breeds.images;
export const selectImageRandom = (state: RootState) => state.breeds.imageRandom;

export const selectSelectedBreed = (state: RootState) => state.breeds.selectedBreed;
export const selectSelectedSubBreed = (state: RootState) => state.breeds.selectedSubBreed;
export const selectImageCount = (state: RootState) => state.breeds.selectedImageCount;
export const selectStatus = (state: RootState) => state.breeds.status;
