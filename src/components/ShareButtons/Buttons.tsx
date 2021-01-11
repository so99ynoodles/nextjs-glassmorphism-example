import React from 'react';
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
} from 'react-share';
import { FaFacebook, FaLine, FaTwitter } from 'react-icons/fa';

import { SITE_URL, TWITTER_ID } from '../../utils/env';

type ShareButtonsProps = {
  urlBlog: string;
  title: string;
};

export const ShareButtons: React.FC<ShareButtonsProps> = ({
  urlBlog,
  title,
}) => {
  const url = new URL(urlBlog, SITE_URL).toString();

  return (
    <>
      <TwitterShareButton url={url} title={title} via={TWITTER_ID}>
        <FaTwitter size="1.5rem" fill="var(--font-color-sub)" />
      </TwitterShareButton>
      <FacebookShareButton url={url}>
        <FaFacebook size="1.5rem" fill="var(--font-color-sub)" />
      </FacebookShareButton>
      <LineShareButton title={title} url={url}>
        <FaLine size="1.5rem" fill="var(--font-color-sub)" />
      </LineShareButton>
    </>
  );
};
