import { AbstractControl, ValidatorFn} from '@angular/forms';
//import { Validator } from '@angular/forms/src/directives/validators';


export const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PWD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#_!%*?.,"^()`'*&+~|{}:;<>/])[A-Za-z\d$@$^!%*?&+~|{}:;<>=/]{8,}/;
// export const NAME_PATTERN = /[~`.!#$%\^&*+=\\[\]\\;,/{}|\\":<>\?]/;
// export const PWD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#_^$!%*?&+~|{}:;<>/])[A-Za-z\d$@$!%*?&+~|{}:;<>/]{8,}/;
export const NAME_PATTERN = `^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`;
export const MOBILE_PATTERN1 = `^(([+]{1}[0-9]{2}|0)[0-9]{9})$`;
export const MOBILE_PATTERN = `^[0-9]*$`;

// export const MOBILE_REGEXP = '^\d{4}-\d{3}-\d{4}$';


export class CustomValidators {

    /**
     * Match two controls if they are the same
     * @param firstControlName
     * @param secondControlName
     * @returns {(AC: AbstractControl) => any}
     * @constructor
     */
    static Match(firstControlName, secondControlName) {
        return (AC: AbstractControl) => {
            let firstControlValue = AC.get(firstControlName).value; // to get value in input tag
            let secondControlValue = AC.get(secondControlName).value; // to get value in input tag
            if (firstControlValue != secondControlValue) {
                AC.get(secondControlName).setErrors({ MatchFields: true });
            } else {
                return null
            }
        };
    }
}


export function equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    
    let input = control.value;
    
    let isValid=control.root.value[field_name]==input
    if(!isValid)
    return { 'equalTo': {isValid} }
    else
    return null;
    };
}


   
    
