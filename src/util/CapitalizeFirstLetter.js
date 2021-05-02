//Transforma a primeira letra de uma palavra em maíusculo
//Ex:  lucas => Lucas

const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter;