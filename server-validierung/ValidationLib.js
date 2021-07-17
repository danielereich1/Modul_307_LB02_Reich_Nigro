
function showError(id, message) {
    return `${id}: ${message}`;
}

function showSuccess(id) {
    return `${id} successfully validated!`;
}


function checkEmail(id,input) {

    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email is not valid')
        }
    }
    return result;
}

function checkContactAccept(contactaccept) {
    return {isNotValid: contactaccept != "true", msg: 'Please confirm that we can Contact you.'};
}
function checkRequired(id, input) {

    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }

    if (input.trim() === '') {

        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }

    return result;
}


function checkLength(id, input, min, max) {

    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
            `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be less than ${max} characters`)
        }
    }
    return result;
}

module.exports = {
    checkEmail,
    checkLength,
    checkRequired
}
