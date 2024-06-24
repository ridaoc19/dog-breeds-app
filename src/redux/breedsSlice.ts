/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchBreeds, fetchImages, FetchImagesProps, fetchImagesRandom, Images, toggleFavorite } from '../services/api';
import createAppSlice from './createAppSlice';
import type { RootState } from './store';

export interface InitialState {
	breeds: {
		[breed: string]: {
			subBreeds: string[];
			images: Images[];
		};
	};
	imageRandom: string[];
	isFavorites: boolean;
	selectedBreed: string;
	selectedSubBreed: string;
	selectedImageCount: number;
	status: {
		isLoading: boolean;
		isError: boolean;
	};
}

const initialState: InitialState = {
	breeds: {},
	imageRandom: [],
	isFavorites: true,
	selectedImageCount: 0,
	selectedBreed: '',
	selectedSubBreed: '',
	status: {
		isLoading: false,
		isError: false,
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
			state.isFavorites = true;
		}),
		postSelectedSubBreed: create.reducer(
			(state, { payload: { breed, subBreed } }: PayloadAction<{ breed: string; subBreed: string }>) => {
				const filterImages = state.breeds[breed].images.filter(({ image }) => image.includes(subBreed));
				state.selectedImageCount = filterImages.length;
				state.selectedSubBreed = subBreed;
			}
		),
		postSelectedImageCount: create.reducer((state, action: PayloadAction<number>) => {
			state.selectedImageCount = action.payload;
		}),
		updateToggleFavorite: create.reducer(
			(state, { payload: { breed, imageUrl } }: PayloadAction<{ breed: string; imageUrl: string }>) => {
				state.breeds = toggleFavorite({ breed, imageUrl });
			}
		),
		postIsFavorite: create.reducer(state => {
			state.isFavorites = !state.isFavorites;
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
		postSelectedBreed: create.asyncThunk(
			async ({ breed, subBreed }: FetchImagesProps) => {
				const response = await fetchImages({ breed, subBreed });
				return response;
			},
			{
				pending: state => {
					state.status.isLoading = true;
				},
				fulfilled: (state, { payload: { breeds, breed } }) => {
					state.selectedBreed = breed;
					state.selectedSubBreed = '';
					state.status.isLoading = false;
					state.breeds = breeds;
					state.selectedImageCount = breeds[breed].images.length;
					state.isFavorites = false;
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
	postIsFavorite,
	postSelectedBreed,
	updateToggleFavorite,
	postSelectedSubBreed,
	postSelectedImageCount,
} = breedsSlice.actions;
export const selectBreedsState = (state: RootState) => state.breeds;
