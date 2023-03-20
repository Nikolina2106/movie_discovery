export const getYearFromStringDate = (date?: string): string => {
    if (!date) return 'Unknown';
    const splitedDate = date.split('-');
    return splitedDate[0];
};

export const getMonthFromDate = (current: Date): string | number => {
    if (current.getMonth() < 10) {
        return `0${current.getMonth() + 1}`;
    }
    return current.getMonth() + 1;
};

export const capitalize = (s: string): string => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export const minuteToHourAndMinuteString = (minute?: number | null): string => {
    if (!minute) return 'Unknown';
    const hour = Math.floor(minute / 60);
    const remainingMinute = minute % 60;
    return `${hour}h ${remainingMinute}m`;
};
