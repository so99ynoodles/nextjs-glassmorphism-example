import React from 'react';
import { useButton } from '@react-aria/button';
import styled from '@emotion/styled';

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

interface ActionButtonProps {
  onPress?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onPress,
  children,
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
    </Button>
  );
};
