function check_password(pass) {
    const regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/;
    return regExp.test(pass) ? "valid" : "not valid";
}
