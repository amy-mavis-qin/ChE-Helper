const func = require('./functions');

function antoineCalculations(molecule, input) {
    var result = [];
    var Pvap, T, a, b, c;
    if (Array.isArray(molecule)){
        a = molecule[0];
        b = molecule[1];
        c = molecule[2];
    }
    input = func.variableInput(input)
    if(input.pressure && input.pressure[1] !== 'mmhg') {
        Pvap = func.unitConvert(input.pressure[0]+input.pressure[1],"mmhg");
        T = b /( a - Math.log10(Pvap)) - c;
        if(Pvap === Math.round(Math.pow(10, (a - (b / (T + c)))))){
            return([T, 'c']);
        }
    } else if (input.pressure) {
        // Solving for Temperature
        Pvap = input.pressure[0];
        T = b /( a - Math.log10(Pvap)) - c;
        if(Pvap === Math.round(Math.pow(10, (a - (b / (T + c)))))){
            return([T, 'c']);
        }
    };
    if (input.temperature && input.temperature[1] !== 'c') {
        T = func.tempConvert(input.temperature, 'c');
        Pvap = Math.pow(10, (a - (b / (T + c))));
        if(T === Math.round(b /( a - Math.log10(Pvap)) - c)){
            return([Pvap, 'mmhg']);
        }
    } else if(input.temperature){
        // Solving for pressure
        T = input.temperature[0];
        Pvap = Math.pow(10, (a - (b / (T + c))));
        if(T === Math.round(b /( a - Math.log10(Pvap)) - c)){
            return([Pvap, 'mmhg']);
        }
    };
    return(result);
};

module.exports = {
    antoineCalculations
};