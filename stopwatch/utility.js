export const getTimeFormat = (time) => {
    return time < 10 ? `0${time}` : `${time}`; //TERNARY EXPRESSION
}

// export const getTimeFormat = (time) => time < 10 ? `0${time}` : `${time}`; fast why to return without word 'return'
