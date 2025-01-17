import React from 'react';
import ModalWrapper from 'shared/ui/ModalWrapper';
import SignInModal from './components/SignInModal';
import ButtonSignIn from './components/ButtonSignIn';

const SignIn = () => (
  <ModalWrapper
    ButtonOpen={ButtonSignIn}
    ModalContent={SignInModal}
  />
);

export default SignIn;
