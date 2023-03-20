export const START_PAGE_LOADER_ACTION = 'START_PAGE_LOADER_ACTION';
export const STOP_PAGE_LOADER_ACTION = 'STOP_PAGE_LOADER_ACTION';
export const START_SEARCH_LOADER_ACTION = 'START_SEARCH_LOADER_ACTION';
export const STOP_SEARCH_LOADER_ACTION = 'STOP_SEARCH_LOADER_ACTION';

export interface IStartPageLoaderAction {
    type: typeof START_PAGE_LOADER_ACTION;
    mask?: boolean;
}

export interface IStopPageLoaderAction {
    type: typeof STOP_PAGE_LOADER_ACTION;
}

export interface IStartSearchLoaderAction {
    type: typeof START_SEARCH_LOADER_ACTION;
}

export interface IStopSearchLoaderAction {
    type: typeof STOP_SEARCH_LOADER_ACTION;
}

export type PageLoaderReducerType = IStartPageLoaderAction | IStopPageLoaderAction | IStartSearchLoaderAction | IStopSearchLoaderAction;
