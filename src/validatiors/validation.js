const validationEmail = (email) => {
    const regex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(String(email).toLowerCase());
}

const validationPassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; 
    return regex.test(String(password));
}

module.exports = {validationEmail, validationPassword}