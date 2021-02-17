import React from 'react';

const AntoinesEquation = () => {
    return (
       <div>
          <div className='definition'>
            <div className="definition-left">
                Definition
            </div>
            <div className="calculation-right">
                The Antoine equation is a class of semi-empirical correlations describing the relation between vapor pressure and temperature for pure substances. The Antoine equation is derived from the Clausius–Clapeyron relation. The equation was presented in 1888 by the French engineer Louis Charles Antoine (1825–1897).
            </div>
        </div>
        <div className='equation'>
            <div className="equation-left">
                Formulas
            </div>
            <div className="equation-right">
                <p>log10(p) = A - B / (C + T) </p>
            </div>
        </div>
        <div className='calculator'>
            <div className="calculator-left">
                Calculator
            </div>
            <div className="calculator-right">
            </div>
        </div>
       </div>
    );
}
 
export default AntoinesEquation;