import React from 'react';
import { useButton } from '@react-aria/button';
import styled from '@emotion/styled';
import { VisuallyHidden } from '@react-aria/visually-hidden';

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

interface ActionButtonProps {
  onPress?: () => void;
  name?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onPress,
  children,
  name,
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
    <Button ref={ref} {...buttonProps} {...layoutProps}>
      {children}
      {name && <VisuallyHidden elementType="span">{name}</VisuallyHidden>}
    </Button>
  );
};
