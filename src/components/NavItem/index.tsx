import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useHover } from '@react-aria/interactions';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { mq } from '../../../lib/media-query';

interface ListItemProps {
  isActive?: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 0.5rem;
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  min-height: 4rem;
  border-radius: 1rem;
  background: ${(props) =>
    props.isActive ? 'rgba(var(--bg-color), 0.6)' : 'transparent'};
  box-shadow: ${(props) => (props.isActive ? 'var(--box-shadow-md)' : 'none')};

  @media ${mq.max.laptop} {
    width: 3rem;
    height: 3rem;
    min-width: 3rem;
    min-height: 3rem;
  }
`;

interface NavItemProps {
  isDisabled?: boolean;
  href: string;
  exact?: boolean;
  name?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  isDisabled,
  href,
  children,
  exact,
  name,
}) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  const { isHovered, hoverProps } = useHover({
    isDisabled,
  });
  return (
    <ListItem {...hoverProps} isActive={isActive}>
      <Link href={href} passHref>
        <a>
          {React.cloneElement(children as any, {
            isActive: isActive || isHovered,
          })}
          {name && <VisuallyHidden elementType="span">{name}</VisuallyHidden>}
        </a>
      </Link>
    </ListItem>
  );
};
