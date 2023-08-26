import { createSlice } from '@reduxjs/toolkit'

export interface Home {
  value: number
}

const initialState: Home = {
  value: 0,
}

export const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
// export const { } = homeSlice.actions 

export default homeSlice.reducer