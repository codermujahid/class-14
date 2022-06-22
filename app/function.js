


/**
 * Alert function
 */
const setAlert =  ( masg , type = 'danger') => {
return ` <p class="alert alert-${type} d-flex justify-content-between">${masg} <button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}


/**
 * Email check
 */


const emailCheck = (email) => {
    let emailPattern = /^[a-z0-9\._]{1,}@[a-z0-9]{1,}\.[a-z]{1,4}$/;
    return emailPattern.test(email);
 
}

/**
 * Phone number check
 */
 const phoneCheck = (phone) => {
    let phonePattern = /^(01|8801|\+8801)[0-9]{9}$/;
    return phonePattern.test(phone);

}