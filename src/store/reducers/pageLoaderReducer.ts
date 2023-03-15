import {PageLoaderReducerType, START_PAGE_LOADER_ACTION, STOP_PAGE_LOADER_ACTION} from "./types/pageLoader.action.type";

export interface PageLoaderReducerState {
    pageLoader: boolean;
    mask?: boolean;
}

export const pageLoaderReducerPreloadedState = {
    pageLoader: false,
    mask: false
}

export const pageLoaderReducer = (state: PageLoaderReducerState = pageLoaderReducerPreloadedState, action: PageLoaderReducerType): PageLoaderReducerState => {
    switch (action.type) {
        case START_PAGE_LOADER_ACTION:
            return {...state, pageLoader: true, mask: action.mask};
        case STOP_PAGE_LOADER_ACTION:
            return {...state, pageLoader: false, mask: false};
        default:
            return {...state};
    }
}