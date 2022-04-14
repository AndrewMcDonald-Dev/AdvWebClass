export const convertDate = (date: string): number => {
    //2022-3-23
    const times = date.split("-");
    return new Date(
        parseInt(times[0]),
        parseInt(times[1]) - 1,
        parseInt(times[2])
    ).getTime();
};
