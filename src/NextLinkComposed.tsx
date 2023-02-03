// next imports
import NextLink from 'next/link';
import * as React from 'react';

// types
import { NextLinkComposedProps } from './types/link';

// =============================|| Next Link Component ||============================= //

export const NextLinkComposed = React.forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>(function NextLinkComposed(
  { to, linkAs, href, replace, scroll, shallow, prefetch, locale, ...other },
  ref,
) {
  return (
    <NextLink
      ref={ref}
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
      {...other}
    ></NextLink>
  );
});

export default NextLinkComposed;
