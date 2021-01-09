import React from 'react';

import { ShareButtons } from './Buttons';

type ShareButtonsHorizontalProps = {
  urlBlog: string;
  title: string;
};

export const ShareButtonsHorizontal: React.FC<ShareButtonsHorizontalProps> = ({
  title,
  urlBlog,
}) => (
  <div>
    <ShareButtons urlBlog={urlBlog} title={title} />
  </div>
);
