import { useOverlay, usePreventScroll, useModal } from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import styled from '@emotion/styled';
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '../../utils/useLocale';
import { ModeRadio } from '../ModeRadio';
import { ActionButton } from '../ActionButton';
import { FaTimes } from 'react-icons/fa';
import { useButton } from '@react-aria/button';
import { useRouter } from 'next/router';

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

const ModalCard = styled<any>(motion.div)`
  background: rgba(var(--bg-color), 0.6);
  border-radius: 2rem;
  box-shadow: var(--box-shadow-required);
  min-width: 19rem;
  min-height: 20rem;
  border: 2px solid var(--border-color);
  padding: 1.5rem;
  outline: none;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.section`
  padding-top: 2rem;
`;

const SectionHeading = styled.h5`
  font-size: 0.875rem;
  color: var(--font-color-sub);
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.button<{ isDisabled?: boolean }>`
  border: none;
  border-radius: 0.5rem;
  background: ${(props) =>
    props.isDisabled
      ? 'rgba(var(--bg-color), 0.9)'
      : 'rgba(var(--bg-color), 0.3)'};
  border: 1px solid var(--border-color);
  box-shadow: var(--box-shadow-md), var(--box-shadow-lg);
  padding: 1rem;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  max-width: 3rem;
  max-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-right: 1rem;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
`;

const LangButton = ({ children, isDisabled, onPress }) => {
  const ref = React.useRef();
  const { buttonProps } = useButton(
    {
      isDisabled,
      onPress,
    },
    ref
  );

  return (
    <Button {...buttonProps} isDisabled={isDisabled}>
      {children}
    </Button>
  );
};

export const ConfigModal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
}) => {
  const { locale: lang, push, pathname } = useRouter();
  const onLocalChange = (locale: string) => {
    push(pathname, undefined, {
      locale,
    });
  };
  const locale = useLocale();
  const ref = React.useRef();
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
  const { dialogProps, titleProps } = useDialog({}, ref);
  return (
    <Backdrop>
      <FocusScope contain restoreFocus autoFocus>
        <ModalCard {...overlayProps} {...dialogProps} {...modalProps} ref={ref}>
          <Header>
            <h3 {...titleProps}>{title}</h3>
            <ActionButton onPress={onClose}>
              <FaTimes />
            </ActionButton>
          </Header>
          <Section>
            <SectionHeading>{locale.themeSetting}</SectionHeading>
            <ModeRadio />
          </Section>
          <Section>
            <SectionHeading>{locale.langSetting}</SectionHeading>
            <ButtonGroup>
              <LangButton
                onPress={() => onLocalChange('ja')}
                isDisabled={lang === 'ja'}
              >
                🇯🇵
              </LangButton>
              <LangButton
                onPress={() => onLocalChange('en')}
                isDisabled={lang === 'en'}
              >
                🇺🇸
              </LangButton>
              <LangButton
                onPress={() => onLocalChange('kr')}
                isDisabled={lang === 'kr'}
              >
                🇰🇷
              </LangButton>
            </ButtonGroup>
          </Section>
        </ModalCard>
      </FocusScope>
    </Backdrop>
  );
};
