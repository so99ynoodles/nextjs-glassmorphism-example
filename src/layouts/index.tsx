import styled from '@emotion/styled';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NavItem } from '../components/NavItem';
import { ConfigIcon } from '../assets/icons/Config';
import { DocumentIcon } from '../assets/icons/Document';
import { HomeIcon } from '../assets/icons/Home';
import { LogoIcon } from '../assets/icons/Logo';
import { UserIcon } from '../assets/icons/User';
import { WorkIcon } from '../assets/icons/Work';
import { mq } from '../../lib/media-query';
import { ActionButton } from '../components/ActionButton';
import { Responsive } from '../components/Responsive';
import { SearchInput } from '../components/SearchInput';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import React, { useState } from 'react';
import { CheveronMenuIcon } from '../assets/icons/CheveronMenu';

const Root = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 2.5rem;

  @media ${mq.max.laptop} {
    padding: 2rem;
  }

  @media ${mq.max.mobile} {
    padding: 0.25rem;
  }
`;

const Container = styled(motion.div)`
  height: 100%;
  background: rgba(var(--bg-color), 0.4);
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid var(--border-color);
  box-shadow: var(--box-shadow-md), var(--box-shadow-lg);
  backdrop-filter: blur(0.25rem);
  display: flex;
  flex-direction: row;

  @media ${mq.max.laptop} {
    flex-direction: column;
    padding: 0.5rem;
  }

  .nav-icon {
    width: 3rem;
    height: 3rem;

    @media ${mq.max.laptop} {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Main = styled(motion.main)`
  background: rgba(var(--bg-color), 0.4);
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid var(--border-color);
  box-shadow: var(--box-shadow-lg);
  flex-grow: 1;
  overflow: scroll;

  @media ${mq.max.laptop} {
    padding: 0.5rem;
  }
`;

const Navigation = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 2rem;

  ul {
    display: flex;
    flex-direction: column;
    margin-top: -1.5rem;
  }

  li {
    margin-top: 1.5rem;
  }

  @media ${mq.max.laptop} {
    flex-direction: row;
    padding: 1rem 1rem 0 1rem;
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

const Search = styled(motion.div)`
  flex-grow: 1;
  display: none;

  @media ${mq.max.laptop} {
    display: block;
    margin: 0 1rem;
  }
`;

const SmallNavigation = styled(motion.nav)`
  display: none;
  margin-bottom: 0.5rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${mq.max.laptop} {
    display: block;
  }
`;

export const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Root>
      <Container>
        <Navigation role="navigation" aria-label="navigation">
          <Link href="/" passHref>
            <a>
              <VisuallyHidden elementType="span">Logo</VisuallyHidden>
              <LogoIcon className="nav-icon" fill="var(--primary-color)" />
            </a>
          </Link>
          <Responsive desktop>
            <ul>
              <NavItem name="Home" exact href="/">
                <HomeIcon className="nav-icon" />
              </NavItem>
              <NavItem name="About Me" href="/about">
                <UserIcon className="nav-icon" />
              </NavItem>
              <NavItem name="My Work" href="/work">
                <WorkIcon className="nav-icon" />
              </NavItem>
              <NavItem name="Blog" href="/blog">
                <DocumentIcon className="nav-icon" />
              </NavItem>
            </ul>
          </Responsive>
          <Search>
            <SearchInput />
          </Search>
          <Responsive desktop>
            <ActionButton name="Configuration">
              <ConfigIcon className="nav-icon" />
            </ActionButton>
          </Responsive>
          <Responsive mobile tablet laptop>
            <ActionButton
              small
              onPress={() => setIsOpen(!isOpen)}
              name="Open Menu"
            >
              <CheveronMenuIcon isOpen={isOpen} className="nav-icon" />
            </ActionButton>
          </Responsive>
        </Navigation>
        {isOpen && (
          <SmallNavigation>
            <ul style={{ display: 'flex' }}>
              <NavItem name="Home" exact href="/">
                <HomeIcon className="nav-icon" />
              </NavItem>
              <NavItem name="About Me" href="/about">
                <UserIcon className="nav-icon" />
              </NavItem>
              <NavItem name="My Work" href="/work">
                <WorkIcon className="nav-icon" />
              </NavItem>
              <NavItem name="Blog" href="/blog">
                <DocumentIcon className="nav-icon" />
              </NavItem>
              <ActionButton name="Configuration">
                <ConfigIcon className="nav-icon" />
              </ActionButton>
            </ul>
          </SmallNavigation>
        )}
        <Main role="main">{children}</Main>
      </Container>
    </Root>
  );
};
