$(document).ready(function () {
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
$(document).ready(function () {
  $('#register').submit(function () {
    var _password = $.trim($('#password').val());
    var _passwordReturn = $.trim($('#passwordReturn').val());
    var _return = true;
    if (_password != _passwordReturn) {
      $('#pass_error').text('The password entered is incorrect');
      _return = false;
    } else {
      $('#pass_error').text('');
    }
  });
  $.validator.addMethod('check_phone', function (value) {
    return /^[0][9|3|8][0-9]{8}$/.test(value);
  });
  $.validator.addMethod('check_pass', function (value) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(value);
  });
  $('#register').validate({
    rules: {
      name: {
        required: true,
      },
      address: {
        required: true,
      },
      phone: {
        required: true,
        check_phone: true,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
      city: {
        required: true,
      },
      sex: {
        required: true,
      },
      birthday: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'Name may not be blank',
      },
      address: {
        required: 'Address may not be blank',
      },
      phone: {
        required: 'Phone may not be blank',
        check_phone: 'The phone number is not in the correct format',
      },
      email: {
        required: 'Email may not be blank',
        email: '*Email is not in the correct format',
      },
      password: {
        required: 'Password may not be blank',
        minlength: 'Password is at least 6 characters',
      },
      city: {
        required: 'city may not be blank',
      },
      sex: {
        required: 'Please select a gender',
      },
      birthday: {
        required: 'sdsadss',
      },
    },
  });
  $('#login').validate({
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 6,
    },
    messages: {
      email: {
        required: 'Email may not be blank',
        email: '*Email is not in the correct format',
      },
      password: {
        required: 'Password may not be blank',
        minlength: 'Password is at least 6 characters',
      },
    },
  });
});
