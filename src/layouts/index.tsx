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

const Container = styled(motion.div)`
  height: 100%;
  background: rgba(var(--bg-color), 0.4);
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid var(--border-color);
  box-shadow: var(--box-shadow-md), var(--box-shadow-lg);
  backdrop-filter: blur(0.25rem);
  display: flex;
  gap: 2rem;
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

  ul {
    display: flex;
    flex-direction: column;
    margin-top: -1.5rem;
  }

  li {
    margin-top: 1.5rem;
  }
`;

export const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation role="navigation" aria-label="navigation">
        <Link href="/" passHref>
          <a role="">
            <LogoIcon size="3rem" fill="#62B0E8" />
          </a>
        </Link>
        <ul>
          <NavItem name="Home" exact href="/">
            <HomeIcon size="3rem" subFill="#BCCCDC" mainFill="#9FB3C8" />
          </NavItem>
          <NavItem name="About Me" href="/about">
            <UserIcon size="3rem" subFill="#BCCCDC" mainFill="#9FB3C8" />
          </NavItem>
          <NavItem name="My Work" href="/work">
            <WorkIcon size="3rem" subFill="#BCCCDC" mainFill="#9FB3C8" />
          </NavItem>
          <NavItem name="Blog" href="/blog">
            <DocumentIcon size="3rem" subFill="#BCCCDC" mainFill="#9FB3C8" />
          </NavItem>
        </ul>
        <ConfigIcon size="3rem" subFill="#BCCCDC" mainFill="#9FB3C8" />
      </Navigation>
      <Main role="main">{children}</Main>
    </Container>
  );
};
