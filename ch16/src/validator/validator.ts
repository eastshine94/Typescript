import * as ns from './my-string-validator';
import * as ns2 from './my-number-validator';

export namespace Validator {
    export import isURL = ns.StringValidator.isURL;
    export import isPhone = ns2.NumberValidator.isPhone;
}


