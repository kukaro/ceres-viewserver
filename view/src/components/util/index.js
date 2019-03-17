let units = ['%', 'px', 'em', 'rem', 'vh', 'vw', 'vmin', 'vmax', 'ex', 'ch'];
let ops = ['+', '-', '*', '/'];

export default {
    makeRandomColor() {
        let color = '';
        let unit;
        for (let i = 0; i < 3; i++) {
            unit = Math.floor(Math.random() * 255).toString(16);
            unit = unit.length === 1 ? '0' + unit : unit;
            color += unit;
        }
        color = '#' + color;
        return color;
    },
    makeUnit(data, unit = 'px') {
        for (var i = 0; i < units.length; i++) {
            if (units[i] === unit) {
                break;
            }
        }
        if (i === units.length && typeof data === 'number') {
            return data + 'px';
        }
        if (typeof (data) !== 'string' && this.checkValueUnitValid(data)) {
            data += unit;
        } else if (typeof (data) === 'string' && !this.checkValueUnitValid(data)) {
            data = `0${unit}`;
        } else if (typeof (data) !== 'string') {
            data = `0${unit}`;
        }
        return data;
    },
    checkValueUnitValid(value) {
        if (typeof value === 'number' && !isNaN(value)) {
            return true;
        }
        value = new String(value);
        for (var i = 0; i < value.length; i++) {
            if (isNaN(value[i]) && value[i] !== '.') {
                break;
            }
        }
        if (i == value.length) {
            //This is number;
            return true;
        } else {
            for (let unit of units) {
                if (unit == value.substr(i, value.length)) {
                    return true;
                }
            }
        }
        return false;
    },
    checkOpValid(value) {
        for (let op of ops) {
            if (value == op) {
                return true;
            }
        }
        return false;
    },
    calcAOB(a, op, b) {
        if (this.checkOpValid(op) && this.checkValueUnitValid(a) && this.checkValueUnitValid(b)){
            return `calc( ${a} ${op} ${b} )`;
        }
        return '0';
    },
    makeBorder(color = 'black', thickness = '1', type = 'solid', unit = 'px') {
        return `${thickness}${unit} ${type} ${color}`;
    },
}