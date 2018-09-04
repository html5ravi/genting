import { FormControl } from '@angular/forms';

export function validateName(c: FormControl) {
    let name_pattern = "[a-zA-Z][a-zA-Z ]+";
    return name_pattern.concat(c.value) ? null : {
        validateName: {
            valid: false
        }
    };
}

export function noWhitespaceValidator(control: FormControl) {
    if (control.value) {
        let isWhitespace = (control.value || '').trim().length === 0;
        // console.log((control.value || '').trim().length);
        // console.log(isWhitespace, "is white space");
        let isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true }
    } else {
        return { 'whitespace': false }
    }

}

export function onlyNumbers(control: FormControl) {
    if (control.value) {
        let isValid = (/^[0-9]+$/).test(control.value);
        return isValid ? null : { 'onlynumber': true };
    }
    else {
        return { 'onlynumber': false }
    }
}



