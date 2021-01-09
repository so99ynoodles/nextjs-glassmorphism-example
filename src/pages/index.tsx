import styled from '@emotion/styled';
import Image from 'next/image';
import Head from 'next/head';
import { GithubIcon } from '../assets/icons/Github';
import { TwitterIcon } from '../assets/icons/Twitter';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { Responsive } from '../components/Responsive';
import { SearchInput } from '../components/SearchInput';
import { mq } from '../../lib/media-query';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  width: 100%;

  @media ${mq.max.laptop} {
    flex-direction: column;
  }
`;

const Section = styled.section`
  padding: 2rem;

  @media ${mq.max.laptop} {
    padding: 2rem 1.5rem;
  }

  @media ${mq.max.tablet} {
    padding: 2rem 1rem;
  }

  @media ${mq.max.mobile} {
    padding: 1rem 0.5rem;
  }
`;

const Avatar = styled(motion.div)`
  border-radius: 50%;
  overflow: hidden;
  background: var(--primary-color);
  border: 3px solid var(--border-color);
  max-width: 240px;
  max-height: 240px;
  box-shadow: var(--box-shadow-lg);
  margin-bottom: 2rem;

  @media ${mq.max.laptop} {
    max-width: 64px;
    max-height: 64px;
    box-shadow: var(--box-shadow-md);
    margin-right: 1.5rem;
  }
`;

const SubHeading = styled(motion.h3)`
  color: var(--font-color-sub);
  font-size: 3em;

  @media ${mq.max.laptop} {
    font-size: 1.125rem;
  }
`;

const Heading = styled(motion.h1)`
  color: var(--font-color-main);
  font-size: 4rem;

  @media ${mq.max.laptop} {
    font-size: 2rem;
  }
`;

const Links = styled(motion.ul)`
  margin-top: 3rem;
  display: flex;

  * + * {
    margin-left: 0.5rem;
  }

  @media ${mq.max.laptop} {
    margin-top: 1rem;
  }
`;

const UserHeading = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>tk.dev</title>
      </Head>
      <Container>
        <Section>
          <Responsive mobile tablet laptop>
            <UserHeading>
              <Avatar>
                <Image
                  alt="Avatar"
                  width={64}
                  height={64}
                  src="/images/goat.png"
                />
              </Avatar>
              <div>
                <SubHeading>Hi, I'm a</SubHeading>
                <Heading>Developer.</Heading>
                <Links>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/so99ynoodles"
                    >
                      <GithubIcon fill="#000" size="2rem" />
                      <VisuallyHidden elementType="span">
                        Github Page
                      </VisuallyHidden>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/so99ynoodles"
                    >
                      <TwitterIcon fill="#1da1f2" size="2rem" />
                      <VisuallyHidden elementType="span">
                        Twitter Page
                      </VisuallyHidden>
                    </a>
                  </li>
                </Links>
              </div>
            </UserHeading>
          </Responsive>
          <Responsive desktop>
            <Avatar
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                alt="Avatar"
                width={240}
                height={240}
                src="/images/goat.png"
              />
            </Avatar>
            <SubHeading
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Hi, I'm a
            </SubHeading>
            <Heading
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Developer.
            </Heading>
            <Links
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/so99ynoodles"
                >
                  <GithubIcon fill="#000" size="2rem" />
                  <VisuallyHidden elementType="span">
                    Github Page
                  </VisuallyHidden>
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/so99ynoodles"
                >
                  <TwitterIcon fill="#1da1f2" size="2rem" />
                  <VisuallyHidden elementType="span">
                    Twitter Page
                  </VisuallyHidden>
                </a>
              </li>
            </Links>
          </Responsive>
        </Section>
        <Section>
          <Responsive desktop>
            <SearchInput />
          </Responsive>
          {/* {allPostsData.map((post) => JSON.stringify(post))} */}
        </Section>
      </Container>
    </>
  );
}
