import styled from '@emotion/styled';
import { mq } from '../../lib/media-query';
import { HtmlHead } from '../components/HtmlHead';
import { useLocale } from '../utils/useLocale';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2rem;

  @media ${mq.max.tablet} {
    padding: 1rem;
  }

  @media ${mq.max.mobile} {
    padding: 0.25rem;
  }
`;

const Content = styled.div`
  padding: 2rem;
  @media ${mq.max.tablet} {
    padding: 1rem;
  }

  @media ${mq.max.mobile} {
    padding: 0.25rem;
  }
`;

export default function AboutLayout({ children }) {
  const locale = useLocale();
  return (
    <Container>
      <HtmlHead title={locale.about} />
      <Content>{children}</Content>
    </Container>
  );
}
