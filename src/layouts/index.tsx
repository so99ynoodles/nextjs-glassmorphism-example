import styled from '@emotion/styled';
import Link from 'next/link';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { NavItem } from '../components/NavItem';
import { ConfigIcon } from '../assets/icons/Config';
import { DocumentIcon } from '../assets/icons/Document';
import { HomeIcon } from '../assets/icons/Home';
import { LogoIcon } from '../assets/icons/Logo';
import { UserIcon } from '../assets/icons/User';
import { mq } from '../../lib/media-query';
import { ActionButton } from '../components/ActionButton';
import { Responsive } from '../components/Responsive';
import { SearchInput } from '../components/SearchInput';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import React, { useState } from 'react';
import { CheveronMenuIcon } from '../assets/icons/CheveronMenu';
import { useLocale } from '../utils/useLocale';
import { ConfigModal } from '../components/ConfigModal';
import { OverlayContainer } from '@react-aria/overlays';
import { useRouter } from 'next/router';
import { SearchIcon } from '../assets/icons/Search';
import { SearchModal } from '../components/SearchModal';

const Root = styled.div`
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

const Container = styled.div`
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

const Main = styled.main`
  background: rgba(var(--bg-color), 0.4);
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid var(--border-color);
  box-shadow: var(--box-shadow-lg);
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;

  @media ${mq.max.laptop} {
    padding: 0.5rem;
  }
`;

const Navigation = styled.nav`
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

  button {
    margin-top: 1.5rem;
  }

  @media ${mq.max.laptop} {
    flex-direction: row;
    padding: 1rem 1rem 0.5rem 1rem;
    margin-right: 0;
    margin-bottom: 0.5rem;
    min-height: 4rem;

    button {
      margin-top: 0;
    }
  }
`;

const Search = styled.div`
  flex-grow: 1;
  display: none;

  @media ${mq.max.laptop} {
    display: block;
    margin: 0 1rem;
  }
`;

const SmallNavigation = styled.nav`
  display: none;
  padding-bottom: 0.5rem;
  min-height: 3rem;

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
  const { locale: lang } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const configState = useOverlayTriggerState({});
  const searchState = useOverlayTriggerState({});
  const locale = useLocale();
  return (
    <Root>
      <Container>
        <Navigation role="navigation" aria-label="navigation">
          <Link href="/" passHref locale={lang}>
            <a>
              <VisuallyHidden elementType="span">{locale.logo}</VisuallyHidden>
              <LogoIcon className="nav-icon" fill="var(--primary-color)" />
            </a>
          </Link>
          <Responsive desktop>
            <ul>
              <NavItem name={locale.home} exact href="/">
                <HomeIcon className="nav-icon" />
              </NavItem>
              <NavItem name={locale.profile} href="/profile">
                <UserIcon className="nav-icon" />
              </NavItem>
              {/* <NavItem name={locale.work} href="/work">
                <WorkIcon className="nav-icon" />
              </NavItem> */}
              <NavItem name={locale.blog} href="/blog">
                <DocumentIcon className="nav-icon" />
              </NavItem>
              <ActionButton
                onPress={searchState.open}
                large
                name={locale.search}
              >
                <SearchIcon className="nav-icon" />
              </ActionButton>
            </ul>
          </Responsive>
          <Search>
            <SearchInput
              onFocus={searchState.open}
              placeholder={locale.search}
            />
          </Search>
          <Responsive desktop>
            <ActionButton onPress={configState.open} name="Configuration">
              <ConfigIcon className="nav-icon" />
            </ActionButton>
          </Responsive>
          <Responsive mobile tablet laptop>
            <ActionButton
              small
              onPress={() => setIsOpen(!isOpen)}
              name={locale.openMenu}
            >
              <CheveronMenuIcon isOpen={isOpen} className="nav-icon" />
            </ActionButton>
          </Responsive>
        </Navigation>
        {isOpen && (
          <SmallNavigation>
            <ul style={{ display: 'flex' }}>
              <NavItem name={locale.home} exact href="/">
                <HomeIcon className="nav-icon" />
              </NavItem>
              <NavItem name={locale.profile} href="/profile">
                <UserIcon className="nav-icon" />
              </NavItem>
              {/* <NavItem name={locale.work}href="/work">
                <WorkIcon className="nav-icon" />
              </NavItem> */}
              <NavItem name={locale.blog} href="/blog">
                <DocumentIcon className="nav-icon" />
              </NavItem>
              <ActionButton onPress={configState.open} name={locale.config}>
                <ConfigIcon className="nav-icon" />
              </ActionButton>
            </ul>
          </SmallNavigation>
        )}
        <Main role="main">{children}</Main>
      </Container>
      {configState.isOpen && (
        <OverlayContainer>
          <ConfigModal
            isOpen={configState.isOpen}
            title={locale.config}
            onClose={configState.close}
          />
        </OverlayContainer>
      )}
      {searchState.isOpen && (
        <OverlayContainer>
          <SearchModal
            isOpen={searchState.isOpen}
            onClose={searchState.close}
          />
        </OverlayContainer>
      )}
    </Root>
  );
};
