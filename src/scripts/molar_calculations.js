var elements = require('../definitions/element_mass_properties.js');
elements = elements.elements;

function calculateMoles(molarMass, mass){
    return(mass + " g/" + molarMass + " g/mol = "+ (mass/molarMass).toFixed(3) + " mole(s)");
}
function calculateMass(molarMass, mole){
    return(mole + " mol/" + molarMass + " g/mol = "+ (mole*molarMass).toFixed(3) + " g");
}
function calculateMolarMass(mole, mass){
    return(mass + " g/" + mole + " mol = "+(mass/mole).toFixed(3) + " g/mol");
}

function IUPACMolarMass(formula){
    var molarMass = 0;
    var elementArray = formula.split(/(?=[A-Z])/);
    console.log(elementArray);
    for (var i in elements){
        for (var j in elementArray){
            if(elements[i].symbol == elementArray[j]){
                molarMass = molarMass + elements[i].mass
            }
            if(/\d/.test(elementArray[j])){
                var subscript = parseFloat((elementArray[j].match(/\d+/))[0], 10);
                var element = elementArray[j].replace(subscript,"");
                if(subscript !== 0 && elements[i].symbol == element){
                    molarMass = molarMass + (subscript * elements[i].mass)
            } 
        }
        }
    }
    return "The molar mass of " + formula + " is " +molarMass.toFixed(3)+ " g/mol.";
}

module.exports = {
    calculateMoles,
    calculateMass,
    calculateMolarMass,
    IUPACMolarMass
};