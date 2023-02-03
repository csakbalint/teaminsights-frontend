// material-ui
import { Box, BoxProps } from '@mui/material';
// next
import Head from 'next/head';
import { forwardRef, ReactNode, Ref } from 'react';

// ==============================|| Page - SET TITLE & META TAGS ||============================== //

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(
  (
    { children, title = '', meta, ...other }: Props,
    ref: Ref<HTMLDivElement>,
  ) => (
    <>
      <Head>
        <title>{`${title} | TeamInsights`}</title>
        {meta}
      </Head>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  ),
);

export default Page;
