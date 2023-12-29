import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: 'Rohit Kuwar',
            role: 'Sales Head',
            id: 514,
            location: 'Pune',
            Country: 'India'
        } 
    },
    reducers: {
        getUser: (state) => {
            state.user
        }
    }
})

export const { getUser } = userSlice.actions;

export default userSlice.reducer;