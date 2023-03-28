export const getYearFromStringDate = (date?: string): string => {
    if (!date) return 'Unknown';
    const splitDate = date.split('-');
    return splitDate[0];
};

export const getMonthFromDate = (current: Date): string | number => {
    if (current.getMonth() < 10) {
        return `0${current.getMonth() + 1}`;
    }
    return current.getMonth() + 1;
};
