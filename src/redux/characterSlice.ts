import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharacterState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState = {
  characters: [],
  loading: false,
  error: null,
};

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    fetchCharactersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCharactersSuccess: (state, action: PayloadAction<Character[]>) => {
      state.loading = false;
      state.characters = action.payload;
    },
    fetchCharactersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCharactersRequest,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} = characterSlice.actions;

export default characterSlice.reducer;
