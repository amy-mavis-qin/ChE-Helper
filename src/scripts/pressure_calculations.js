const func = require('./functions');
const { antoine_constants } = require('../definitions/antoine_constants.js');

function antoineCalculations(molecule, input) {
    var result = [];
    var Pvap, T;
    var a = antoine_constants[molecule][1];
    var b = antoine_constants[molecule][2];
    var c = antoine_constants[molecule][3];
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