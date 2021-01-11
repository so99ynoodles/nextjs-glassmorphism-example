import { useOverlay, usePreventScroll, useModal } from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import styled from '@emotion/styled';
import React from 'react';
import { SearchInput } from '../SearchInput';
import { useLocale } from '../../utils/useLocale';

interface ModalProps {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const Backdrop = styled.div`
  background: rgba(var(--bg-color), 0.6);
  backdrop-filter: blur(0.25rem);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalCard = styled.div`
  background: rgba(var(--bg-color), 0.6);
  border-radius: 2rem;
  box-shadow: var(--box-shadow-required);
  min-width: 19rem;
  border: 2px solid var(--border-color);
  padding: 1.5rem;
  outline: none;
`;

export const SearchModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const ref = React.useRef();
  const locale = useLocale();
  const { overlayProps } = useOverlay(
    {
      isDismissable: true,
      isOpen,
      isKeyboardDismissDisabled: false,
      onClose,
    },
    ref
  );

  usePreventScroll();
  const { modalProps } = useModal();
  const { dialogProps } = useDialog({}, ref);
  return (
    <Backdrop>
      <FocusScope contain autoFocus>
        <ModalCard {...overlayProps} {...dialogProps} {...modalProps} ref={ref}>
          <SearchInput placeholder={locale.search} />
        </ModalCard>
      </FocusScope>
    </Backdrop>
  );
};
