import { NextPage } from 'next';

export type NextPageWithSeo<P = {}, IP = P> = NextPage<P, IP> & {
  title?: string;
  pageTitle?: string;
};
