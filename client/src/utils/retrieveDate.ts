export const retrieveDate = (timeStamp: number): string => {
    const date = new Date(timeStamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};
