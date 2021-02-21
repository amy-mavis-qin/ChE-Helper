var units={
    length:{
        'm':1,
        'in':39.370,
        'ft': 3.28084,
        'mi': 0.000621371
    },
    area:{
        'm^2': 1,
        'cm^2': 10000,
        'in^2': 1550.0031,
        'ft^2': 10.7639
    },
    volume:{
        'm^3': 1,
        'l': 1000,
        'in^3': 61023.7,
        'usgal': 264.172,
        'impgal': 219.969
    },
    mass:{
        'kg': 1,
        'lbm': 2.20462,
        'oz': 35.274,
        'ton': 0.001
    },
    density:{
        'g/cm^3': 1,
        'kg/m^3': 1000,
        'g/l': 1000,
        'lbm/ft^3': 62.4280
    },
    force:{
        'n': 1,
        'dyne': 100000,
        'lbf': 0.224809,
        'kgf': 0.10197,
        'lbm*ft/s^2': 7.23301
    },
    pressure:{
        'atm':1,
        'pa':101325,
        'kpa':1.01325,
        'bar':1.01325,
        'psi':14.6959,
        'mmhg': 760
    },
    energy:{
        'j': 1,
        'btu': 0.00094782,
        'cal': 0.23885,
        'ft*lbf': 0.737561
    },
    power:{
        'w': 1,
        'kg*m^2/s^2': 1,
        'btu/h': 3.4121,
        'hp': 0.00134102
    },
    time:{
        'sec': 1,
        'min': 1/60,
        'h': 1/360
    },
    temperature:{
        'c':'celsius',
        'k':'kelvin',
        'f':'fahrenheit'
    }
}
exports.units = units;