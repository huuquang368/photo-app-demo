import { createSlice } from '@reduxjs/toolkit';
import mockPhotos from 'data/mockPhotos.json';

const initialPhotos = mockPhotos.data;

const photo = createSlice({
  name: 'photos',
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      const removeId = action.payload;
      return state.filter(photo => photo.id !== removeId);
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);

      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, updatePhoto, removePhoto } = actions;

export default reducer;
