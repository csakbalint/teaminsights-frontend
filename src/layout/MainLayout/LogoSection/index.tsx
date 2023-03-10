// material-ui
import { Link as MuiLink } from '@mui/material';

// project imports
import { DASHBOARD_PATH } from 'config';

import Link from 'Link';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
  <MuiLink component={Link} href={DASHBOARD_PATH}>
    <Logo />
  </MuiLink>
);

export default LogoSection;
