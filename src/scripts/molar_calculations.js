function calculateMoles(molarMass, mass){
    return(mass + " g/" + molarMass + " g/mol = "+ mass/molarMass + " mole(s)");
}
function calculateMass(molarMass, mole){
    return(mole + " mol/" + molarMass + " g/mol = "+ mole*molarMass + " g");
}
function calculateMolarMass(mole, mass){
    return(mass + " g/" + mole + " mol = "+mass/mole + " g/mol");
}
module.exports = {
    calculateMoles,
    calculateMass,
    calculateMolarMass
};