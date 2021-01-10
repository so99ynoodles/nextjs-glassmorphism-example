import React from 'react';
import { useButton } from '@react-aria/button';
import styled from '@emotion/styled';
import { VisuallyHidden } from '@react-aria/visually-hidden';

const Button = styled.button<{ small: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  width: ${(props) => (props.small ? '2rem' : '3rem')};
  height: ${(props) => (props.small ? '2rem' : '3rem')};
`;

interface ActionButtonProps {
  onPress?: () => void;
  name?: string;
  small?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onPress,
  children,
  name,
  small = false,
  ...layoutProps
}) => {
  const ref = React.useRef();
  const { buttonProps } = useButton(
    {
      onPress,
    },
    ref
  );

  return (
    <Button ref={ref} small={small} {...buttonProps} {...layoutProps}>
      {children}
      {name && <VisuallyHidden elementType="span">{name}</VisuallyHidden>}
    </Button>
  );
};
