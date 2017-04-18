import Validator from 'validator';
import _ from 'lodash';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.username = 'This field is requried';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'This field is requried';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    // if (!Validator.isEmail(data.email)) {
    //     errors.email = 'Email is invalid';
    // }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is requried';
    }

    if (Validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = 'This field is requried';
    }

    if (!Validator.equals(data.password, data.passwordConfirm)) {
        errors.passwordConfirm = 'Password must match';
    }

    if (Validator.isEmpty(data.timezone)) {
        errors.timezone = 'This field is requried';
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}
