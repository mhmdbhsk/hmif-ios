import { NextSeo, NextSeoProps } from 'next-seo';

export interface CustomSeoProps extends NextSeoProps {
  title?: string;
}

const CustomSeo: React.FunctionComponent<CustomSeoProps> = ({
  title,
  ...props
}: CustomSeoProps) => {
  // if there is no template provided, use the default template which is your Name
  // if you pass title = "next admin" and template = "gakidomo"
  // the result would be = "next admin — gakidomo" otherwise it would be = "next admin — Next.js App"
  const customTemplate = `%s - Informatics Ongoing Story`;

  return (
    <NextSeo {...props} titleTemplate={customTemplate} title={title ?? 'IOS'} />
  );
};

export default CustomSeo;
