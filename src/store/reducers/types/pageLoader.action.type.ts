export const START_PAGE_LOADER_ACTION = 'START_PAGE_LOADER_ACTION';
export const STOP_PAGE_LOADER_ACTION = 'STOP_PAGE_LOADER_ACTION';

export interface IStartPageLoaderAction {
    type: typeof START_PAGE_LOADER_ACTION;
    mask?: boolean;
}

export interface IStopPageLoaderAction {
    type: typeof STOP_PAGE_LOADER_ACTION;
}

export type PageLoaderReducerType =
    | IStartPageLoaderAction
    | IStopPageLoaderAction;