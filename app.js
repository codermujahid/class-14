
const user_creat_form = document.getElementById('user_creat_form');
const masg = document.querySelector('.masg');



const name_req =document.querySelector('.name_req');
const email_req =document.querySelector('.email_req');
const phone_req =document.querySelector('.phone_req');
const zip_req =document.querySelector('.zip_req');




user_creat_form.onsubmit = ( event ) => {
   
    event.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let zip = document.getElementById('zip');
    


   



    if (name.value == '') {
    
    name_req.innerHTML = `<span style="color: red;">*Required</span>`;
    name.style.borderColor = 'red';
    } else {
      name_req.innerHTML = ``;
      name.style.borderColor = 'black';

    }

   if (email.value == '') {
    
      email_req.innerHTML = `<span style="color: red;">*Required</span>`;
      email.style.borderColor = 'red';

    } else {
      email_req.innerHTML = ``;
      email.style.borderColor = 'black';

    }

   if (phone.value == '') {
    
      phone_req.innerHTML = `<span style="color: red;">*Required</span>`;
      phone.style.borderColor = 'red';

    } else {
      phone_req.innerHTML = ``;
      phone.style.borderColor = 'black';

    }

   if (zip.value == '') {
    
      zip_req.innerHTML = `<span style="color: red;">*Required</span>`;
      zip.style.borderColor = 'red';

    } else {
      zip_req.innerHTML = ``;
      zip.style.borderColor = 'black';

    }







    if ( name.value == '' || email.value == '' || phone.value == '' || zip.value == '' ) {
        masg.innerHTML = setAlert('All fields are requerd');
   
     }else if( emailCheck(email.value) == false ){

        masg.innerHTML =  setAlert('Invalid email address', 'warning');

     }else if( phoneCheck(phone.value) == false ){

        masg.innerHTML =  setAlert('Invalid phone number', 'info');

     }else{
        masg.innerHTML =  setAlert('Data stable', 'success');

     }
     
}
