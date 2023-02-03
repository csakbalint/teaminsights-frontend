// project imports
import { FC, ReactNode } from 'react';
import GuestGuard from 'utils/route-guard/GuestGuard';

import NavMotion from './NavMotion';

interface Props {
  children: ReactNode;
}

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout: FC<Props> = ({ children }) => (
  <NavMotion>
    <GuestGuard>
      <>{children}</>
    </GuestGuard>
  </NavMotion>
);

export default MinimalLayout;
