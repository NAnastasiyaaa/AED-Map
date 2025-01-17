import React from 'react';
import ModalWrapper from 'shared/ui/ModalWrapper';
import SignUpSendmailModal from './components/SignUpSendmailModal';
import ButtonSignUpSendmail from './components/ButtonSignUpSendmail';

const SignUpSendmail = () => (
  <ModalWrapper
    ButtonOpen={ButtonSignUpSendmail}
    ModalContent={SignUpSendmailModal}
  />
);

export default SignUpSendmail;
