interface IconProps {
  fill?: string;
  size?: string;
  isActive?: boolean;
  className?: string;
}

interface TwoColorIconProps extends IconProps {
  mainFill?: string;
  subFill?: string;
}

type ArticleStatus = 'published' | 'draft';

type ArticleFrontMatter = {
  title: string;
  date: string;
  status: ArticleStatus;
  category?: string;
  tags?: string[];
  hero?: string;
  emoji?: string;
  image?: string;
};

type ArticleContent = string;

interface Article {
  slug: string;
  frontMatter: ArticleFrontMatter;
  excerpt: string;
  content?: ArticleContent;
}
