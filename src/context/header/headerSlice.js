import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const showheaderSlice = createSlice({
  name: 'showheader',
  initialState,
  reducers: {
    showHeader: (state, action) => {
      state.value = !state.value
    },    
  },
})


export const { showHeader } = showheaderSlice.actions

export default showheaderSlice.reducer