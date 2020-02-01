import React, { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

import Popup from '../components/Popup/Popup';

const ModalContext = createContext({
  openModalId: '',
  toogleModal: () => {},
  closeModal: () => {}
});

export const ModalProvider = ({ children }) => {
  const [openModalId, setOpenModalId] = useState('');

  const toogleModal = id => setOpenModalId(id);

  const closeModal = () => setOpenModalId('');

  return (
    <ModalContext.Provider
      value={{
        openModalId,
        toogleModal: id => toogleModal(id),
        closeModal: () => closeModal()
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const ModalToggle = ({ id, children }) => (
  <ModalContext.Consumer>
    {({ toogleModal }) => children(() => toogleModal(id))}
  </ModalContext.Consumer>
);

export const Modal = ({
  id,
  icon,
  type,
  title,
  subtitle,
  text,
  stars,
  textarea,
  closeAction,
  CancelButton,
  AcceptButton,
  ...restProps
}) => (
  <ModalContext.Consumer>
    {({ closeModal, openModalId }) => {
      if (openModalId === id) {
        return createPortal(
          <Popup
            {...restProps}
            icon={icon}
            type={type}
            title={title}
            text={text}
            stars={stars}
            textarea={textarea}
            subtitle={subtitle}
            button={CancelButton}
            acceptButton={AcceptButton}
            closeAction={closeAction || closeModal}
          />,
          document.getElementById('modal-root')
        );
      }

      return null;
    }}
  </ModalContext.Consumer>
);

export const withModal = WrappedComponent => {
  return props => (
    <ModalContext.Consumer>
      {state => <WrappedComponent {...props} context={state} />}
    </ModalContext.Consumer>
  );
};
