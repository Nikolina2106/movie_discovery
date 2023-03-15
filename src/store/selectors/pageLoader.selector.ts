import {AppState} from '../reducer';
import { PageLoaderReducerState } from "../reducers/pageLoaderReducer";

export const pageLoaderSelector = (state: AppState): PageLoaderReducerState => state.pageLoaderReducer;
