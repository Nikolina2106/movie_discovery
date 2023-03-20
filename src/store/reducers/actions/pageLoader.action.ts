import {
    IStartPageLoaderAction,
    IStartSearchLoaderAction,
    IStopPageLoaderAction,
    IStopSearchLoaderAction,
    START_PAGE_LOADER_ACTION,
    START_SEARCH_LOADER_ACTION,
    STOP_PAGE_LOADER_ACTION,
    STOP_SEARCH_LOADER_ACTION,
} from '../types/pageLoader.action.type';

export const startPageLoaderAction = (mask?: boolean): IStartPageLoaderAction => ({
    type: START_PAGE_LOADER_ACTION,
    mask,
});

export const stopPageLoaderAction = (): IStopPageLoaderAction => ({
    type: STOP_PAGE_LOADER_ACTION,
});

export const startSearchLoaderAction = (): IStartSearchLoaderAction => ({
    type: START_SEARCH_LOADER_ACTION,
});

export const stopSearchLoaderAction = (): IStopSearchLoaderAction => ({
    type: STOP_SEARCH_LOADER_ACTION,
});
