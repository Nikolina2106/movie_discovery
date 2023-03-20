import {AppState} from '../reducer';
import {PageLoaderReducerState} from '../reducers/pageLoader.reducer';

export const pageLoaderSelector = (state: AppState): PageLoaderReducerState => state.pageLoaderReducer;
