const func = require('./functions');
const { antoine_constants } = require('../definitions/antoine_constants.js');

function antoineCalculations(molecule, input) {
    var result = [];
    var Pvap, T, a, b, c;
    if (Array.isArray(molecule)){
        a = molecule[0];
        b = molecule[1];
        c = molecule[2];
    } else {
        a = antoine_constants[molecule][1];
        b = antoine_constants[molecule][2];
        c = antoine_constants[molecule][3];
    }
    input = func.variableInput(input)
    if(input.pressure && input.pressure[1] !== 'mmhg') {
        Pvap = func.unitConvert(input.pressure,"mmhg");
        console.log('Converted '+ input.pressure + " to " + Pvap.convertedValue + " mmHg.");
        T = b /( a - Math.log10(Pvap.convertedValue)) - c;
        result = [T, 'c'];
    } else if (input.pressure) {
        // Solving for Temperature
        Pvap = input.pressure[0];
        T = b /( a - Math.log10(Pvap)) - c;
        result = [T, 'c'];
    };
    if (input.temperature && input.temperature[1] !== 'c') {
        T = func.tempConvert(input.temperature, 'c');
        console.log('Converted '+ input.temperature + " to " + T + " c.");
        Pvap = Math.pow(10, (a - (b / (T + c))));
        result = [Pvap, 'mmhg'];
    } else if(input.temperature){
        // Solving for pressure
        T = input.temperature[0];
        Pvap = Math.pow(10, (a - (b / (T + c))));
        result = [Pvap, 'mmhg'];
    };
    return(result);
};

module.exports = {
    antoineCalculations
};