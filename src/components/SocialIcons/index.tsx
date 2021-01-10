import styled from '@emotion/styled';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { motion } from 'framer-motion';
import { mq } from '../../../lib/media-query';
import { GithubIcon } from '../../assets/icons/Github';
import { TwitterIcon } from '../../assets/icons/Twitter';
import { useLocale } from '../../utils/useLocale';

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

export const SocialIcons = () => {
  const locale = useLocale();
  return (
    <Links>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/so99ynoodles"
        >
          <GithubIcon size="2rem" />
          <VisuallyHidden elementType="span">
            {locale.githubPage}
          </VisuallyHidden>
        </a>
      </li>
      <li>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/so99ynoodles"
        >
          <TwitterIcon size="2rem" />
          <VisuallyHidden elementType="span">
            {locale.twitterPage}
          </VisuallyHidden>
        </a>
      </li>
    </Links>
  );
};
