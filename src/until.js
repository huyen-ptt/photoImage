export const nameh = 'pham-duc-chinh';

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const changeName = (str) => {
    let splitNames = str.split('-'); // ['pham', 'duc', 'chinh']
    splitNames = splitNames.map(text => {
        return capitalizeFirstLetter(text)
    })
    return splitNames.join(' ')
};

const changeNameByReplace = (str) => {
    return str.replaceAll('-', ' ')
}

export { changeName, changeNameByReplace }
