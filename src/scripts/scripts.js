const func = require('./functions');

function antoineCalculations(input, constants) {
    var result = [];
    var Pvap, T;
    var a = constants[0];
    var b = constants[1];
    var c = constants[2];
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