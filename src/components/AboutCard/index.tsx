import styled from '@emotion/styled';

import Image from 'next/image';
import React from 'react';
import { mq } from '../../../lib/media-query';
import { useLocale } from '../../utils/useLocale';
import { SocialIcons } from '../SocialIcons';

const ImageContainer = styled.div`
  width: 6rem;
  min-width: 6rem;
  height: 6rem;
  min-height: 6rem;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: var(--box-shadow-lg);

  margin-right: 1rem;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  position: fixed;
  border-radius: 2rem;
  background: rgba(var(--bg-color), 0.4);
  box-shadow: var(--box-shadow-lg);
  padding: 1rem 2.5rem 1rem 1.25rem;
  border: 1px solid var(--border-color);
  width: 300px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${mq.max.laptop} {
    position: relative;
    width: 100%;
  }

  .about__card {
    &__name {
      font-size: 1.4rem;
      font-weight: 700;
      margin-right: 0.5rem;
    }

    &__nickname {
      font-size: 1.4rem;
      color: var(--font-color-sub);

      @media ${mq.max.tablet} {
        display: block;
      }
    }

    &__description {
      font-size: 1rem;
      color: var(--font-color-help);
    }
  }
`;

export const AboutCard = () => {
  const locale = useLocale();
  return (
    <Card role="heading" aria-level={1}>
      <ImageContainer>
        <Image
          alt="Profile Picture"
          src="/images/profile.png"
          width={96}
          height={96}
        />
      </ImageContainer>

      <div>
        <div>
          <span className="about__card__name">{locale.name}</span>
          <span className="about__card__nickname">(@so99ynoodles)</span>
        </div>
        <span className="about__card__description">
          {locale.cardDescription}
        </span>
        <SocialIcons />
      </div>
    </Card>
  );
};
