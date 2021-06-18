import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from '../interfaces/Auth';
import { User } from '../interfaces/User';
import api from '../services/api';


const initialState = {
    user: {} as User,
    isLoggedIn: false,
    errorMessage: '',
    
}

export const loginUser = createAsyncThunk(
    'loginUser',
    async ({email, password}: Auth, thunkAPI) => {
        try {
            const response = await api.post('login', {email, password})
            const data = response.data
            if (response.status === 200) {
                await AsyncStorage.setItem('@token', data.token);
                return data
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isLoggedIn = false;
        },
        clearState(state) {
            state.errorMessage = '';
        }

    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.rejected, (state, action: PayloadAction<any, string>) => {
            state.isLoggedIn = false;
            state.errorMessage = action.payload
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user.email = action.payload.email
            state.user.name = action.payload.name
        });
    }
})
export const authActions = authSlice.actions;
export default authSlice.reducer;