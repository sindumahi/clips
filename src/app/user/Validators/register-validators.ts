import { ValidationErrors, AbstractControl,ValidatorFn } from "@angular/forms";

export class RegisterValidators {
    static match(ControlName:string,controlmatchName:string):ValidatorFn {
        return (group: AbstractControl): ValidationErrors | null => {
            const control = group.get(ControlName)
            const controlmatch = group.get(controlmatchName)

            if (!control || !controlmatch) {
                console.error('Form Controls cannot be found in the form group')
                return { Controlnotfound: false }
            }

            const error = control.value === controlmatch.value ? null : { noMatch: true }
            controlmatch.setErrors(error)
            return error
        }
    }

}
