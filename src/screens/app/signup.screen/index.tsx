import React, {useEffect, useReducer, useRef, useState} from 'react';
import SignupScreen from './signup.screen';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {toPasswordsetUpScreen} from '../../../navigation/links/app.links';
import {errorBox} from '@utils/snakbars';

export default function SignupHOC() {
  const navigation = useNavigation();

  const [fname, setFname] = useState('Eliot');
  const [lname, setLname] = useState('Anderson');
  const [email, setEmail] = useState('naveen1337@protonmail.com');
  const [ccode, setCCode] = useState({
    name: 'United States',
    dial_code: '+1',
    Length: 10,
  });
  const [numberModal, setNumberModal] = useState(false);
  const [number, setNumber] = useState('987654321');

  useEffect(() => {}, []);

  const onPressContinue = async () => {
    const email_re = /\S+@\S+\.\S+/;
    const i_fname = fname.replace(/ /g, '');
    const i_lname = lname.replace(/ /g, '');
    const i_email = email.replace(/ /g, '');
    const i_number = number.replace(/ /g, '');
    if (i_fname.length < 3) {
      errorBox('Invalid First name', 0);
      return;
    }
    if (i_lname.length < 1) {
      errorBox('Second name required', 0);
      return;
    }
    if (!email_re.test(i_email)) {
      errorBox('Invalid Email', 0);
      return;
    }
    if (!ccode) {
      errorBox('Country code required', 0);
      return;
    }
    if (i_number.length !== ccode.Length) {
      errorBox(`Invalid phone number, should be ${ccode.Length} digits`, 0);
      return;
    }
    const newUserObj = {
      firstName: fname,
      lastName: lname,
      email: email,
      phoneNumber: `${ccode.dial_code}${number}`,
    };
    toPasswordsetUpScreen(navigation, newUserObj);
  };

  return (
    <SignupScreen
      onPressContinue={onPressContinue}
      fname={fname}
      lname={lname}
      email={email}
      ccode={ccode}
      number={number}
      numberModal={numberModal}
      setFname={setFname}
      setLname={setLname}
      setEmail={setEmail}
      setCCode={setCCode}
      setNumber={setNumber}
      setNumberModal={setNumberModal}
    />
  );
}
