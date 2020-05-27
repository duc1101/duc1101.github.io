$(document).ready(function () {
  //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
  // $('#payment').simpleMoneyFormat();
  // $('#ccnum').payform('formatCardNumber');
  // $('#expiry').payform('formatCardExpiry');
  // $('#cvc').payform('formatCardCVC');
  $('#checkForm').validate({
    rules: {
      name: 'required',
      address: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      id_number: {
        required: true,
      },
      patient_id: 'required',
      medical_id: 'required',
      payment: {
        required: true,
        number: true,
      },
      // ccnum: {
      //   required: true,
      //   creditcard: true,
      // },
    },
    messages: {
      name: 'Name may not be blank',
      address: {
        required: 'Address may not be blank',
        minlength: 'The address field is too short',
      },
      email: 'Email may not be blank',
      id_number: 'Id number may not be blank',
      patient_id: 'Patient code may not be blank',
      medical_id: 'Medical code may not be blank',
      payment: {
        required: 'Payment amount may not be blank',
        number: 'Format must be a number',
      },
    },
  });
});
