import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyOneError',
})
export class OnlyOneErrorPipe implements PipeTransform {

  // pipe has 1 interface "transform"
  // input:
  // 1. allErrors -> errors messages {minlength: true, passwordStrength: true}
  // 2. errorsPriority -> array of priority ['minlength','passwordStrength'] 
  transform(allErrors: any, errorsPriority:string[]): any {

    // if no errors return null
    if (!allErrors) {
      return null;
    }

    // 
    const onlyOneError: any = {};

    // iterate through errors priority and try to look in current errors
    // if found, return it as a single error
    for(let error of errorsPriority) {
      if (allErrors[error]) {
        onlyOneError[error] = allErrors[error];
        break;
      }
    }

    return onlyOneError;


  }
}