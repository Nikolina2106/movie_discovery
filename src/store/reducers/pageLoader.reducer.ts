import {
    PageLoaderReducerType,
    START_PAGE_LOADER_ACTION,
    START_SEARCH_LOADER_ACTION,
    STOP_PAGE_LOADER_ACTION,
    STOP_SEARCH_LOADER_ACTION,
} from './types/pageLoader.action.type';

export interface PageLoaderReducerState {
    pageLoader: boolean;
    searchLoader: boolean;
    mask?: boolean;
}

export const preloadedState = {
    pageLoader: false,
    searchLoader: false,
    mask: false,
};

export const pageLoaderReducer = (
    state: PageLoaderReducerState = preloadedState,
    action: PageLoaderReducerType
): PageLoaderReducerState => {
    switch (action.type) {
        case START_PAGE_LOADER_ACTION:
            return {...state, pageLoader: true, mask: action.mask};
        case STOP_PAGE_LOADER_ACTION:
            return {...state, pageLoader: false, mask: false};
        case START_SEARCH_LOADER_ACTION:
            return {...state, searchLoader: false};
        case STOP_SEARCH_LOADER_ACTION:
            return {...state, searchLoader: false};
        default:
            return {...state};
    }
};
