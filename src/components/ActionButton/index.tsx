import React from 'react';
import { useButton } from '@react-aria/button';
import styled from '@emotion/styled';
import { VisuallyHidden } from '@react-aria/visually-hidden';

const Button = styled.button<{ small: boolean; large?: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  width: ${(props) => (props.small ? '2rem' : props.large ? '4rem' : '3rem')};
  height: ${(props) => (props.small ? '2rem' : props.large ? '4rem' : '3rem')};
`;

interface ActionButtonProps {
  onPress?: () => void;
  name?: string;
  small?: boolean;
  large?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onPress,
  children,
  name,
  small = false,
  large = false,
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
    <Button
      ref={ref}
      small={small}
      large={large}
      {...buttonProps}
      {...layoutProps}
    >
      {children}
      {name && <VisuallyHidden elementType="span">{name}</VisuallyHidden>}
    </Button>
  );
};
