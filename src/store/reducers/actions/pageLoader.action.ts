import {
    IStartPageLoaderAction, IStopPageLoaderAction,
    START_PAGE_LOADER_ACTION,
    STOP_PAGE_LOADER_ACTION
} from "../types/pageLoader.action.type";

export const startPageLoaderAction = (mask?: boolean): IStartPageLoaderAction => ({
    type: START_PAGE_LOADER_ACTION,
    mask,
});

export const stopPageLoaderAction = (): IStopPageLoaderAction => ({
    type: STOP_PAGE_LOADER_ACTION,
});