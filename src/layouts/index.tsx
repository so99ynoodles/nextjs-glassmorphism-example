import styled from '@emotion/styled';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NavItem } from '../components/NavItem';
import { ConfigIcon } from '../icons/Config';
import { DocumentIcon } from '../icons/Document';
import { HomeIcon } from '../icons/Home';
import { LogoIcon } from '../icons/Logo';
import { UserIcon } from '../icons/User';
import { WorkIcon } from '../icons/Work';
import { mq } from '../../lib/media-query';
import { ActionButton } from '../components/ActionButton';
import { MenuIcon } from '../icons/Menu';
import { Responsive } from '../components/Responsive';
import { SearchInput } from '../components/SearchInput';

const Root = styled(motion.div)`
  height: 100%;
  width: 100%;
  padding: 2.5rem;

  @media ${mq.max.laptop} {
    padding: 2rem;
  }

  @media ${mq.max.mobile} {
    padding: 0.5rem;
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
  gap: 2rem;

  @media ${mq.max.laptop} {
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
  }
`;

const Main = styled(motion.main)`
  background: rgba(var(--bg-color), 0.4);
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid var(--border-color);
  box-shadow: var(--box-shadow-lg);
  flex-grow: 1;
`;

const Navigation = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

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
  }

  @media ${mq.max.tablet} {
    gap: 1rem;
  }

  .nav-icon {
    width: 3rem;
    height: 3rem;

    @media ${mq.max.tablet} {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Search = styled(motion.div)`
  flex-grow: 1;
  display: none;

  @media ${mq.max.laptop} {
    display: block;
  }
`;

export const Layout = ({ children }) => {
  return (
    <Root>
      <Container>
        <Navigation role="navigation" aria-label="navigation">
          <Link href="/" passHref>
            <a>
              <LogoIcon className="nav-icon" fill="#62B0E8" />
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
            <ActionButton>
              <ConfigIcon className="nav-icon" />
            </ActionButton>
          </Responsive>
          <Responsive mobile tablet laptop>
            <ActionButton>
              <MenuIcon className="nav-icon" />
            </ActionButton>
          </Responsive>
        </Navigation>
        <Main role="main">{children}</Main>
      </Container>
    </Root>
  );
};
