import Papa from 'papaparse';

export const csvToDataObject = (file, callback) => {
    Papa.parse(file, {
        delimiter: ",",
        complete: function(results) {
            const data = results.data;
            const tiles = data.map((pair)=>{
                return {title:pair[0], imgSrc: pair[1]};
            });
            callback(tiles);
        }
    });
}

export const makeConstantObject = (arr) => {
    const obj = {};
    arr.forEach(el => {
        obj[el] = el;
    });
    return obj;
}

export const getRandomInt = (max)=> {
    return Math.floor(Math.random() * Math.floor(max));
}
