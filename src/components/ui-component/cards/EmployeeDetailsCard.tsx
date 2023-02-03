// assets
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {
  Button,
  Card,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { IconFilePlus, IconInfoCircle } from '@tabler/icons';
import { useState } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

import { Employee } from 'services';
// project imports
import { gridSpacing } from 'store/constant';

import Avatar from '../extended/Avatar';

// ==============================|| USER DETAILS CARD ||============================== //

const EmployeeDetailsCard = ({
  firstName,
  lastName,
  avatar,
  currentLevel,
  lastReviewedAt,
}: Employee) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<
    Element | ((element: Element) => Element) | null | undefined
  >(null);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement> | undefined,
  ) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const name = `${lastName} ${firstName}`;
  return (
    <Card
      sx={{
        p: 2,
        background:
          theme.palette.mode === 'dark'
            ? theme.palette.dark.main
            : theme.palette.grey[50],
        border:
          theme.palette.mode === 'dark'
            ? '1px solid transparent'
            : `1px solid${theme.palette.grey[100]}`,
        '&:hover': {
          borderColor: theme.palette.primary.main,
        },
      }}
    >
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs zeroMinWidth>
              <Avatar alt={name} size="lg" src={avatar} />
            </Grid>
            <Grid item>
              <IconButton
                size="small"
                sx={{ mt: -0.75, mr: -0.75 }}
                onClick={handleClick}
              >
                <MoreHorizOutlinedIcon
                  fontSize="small"
                  color="inherit"
                  aria-controls="menu-friend-card"
                  aria-haspopup="true"
                  sx={{ opacity: 0.6 }}
                />
              </IconButton>
              {anchorEl && (
                <Menu
                  id="menu-user-details-card"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  variant="selectedMenu"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <FormattedMessage id="employee-edit" />
                  </MenuItem>
                </Menu>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" component="div">
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={6}>
              <Typography variant="caption">
                <FormattedMessage id="employee-level" />
              </Typography>
              <Typography variant="h6">{currentLevel ?? 'N/A'}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption">
                <FormattedMessage id="employee-last-review" />
              </Typography>
              <Typography variant="h6">
                {lastReviewedAt ? (
                  <FormattedDate value={lastReviewedAt}></FormattedDate>
                ) : (
                  'N/A'
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<IconFilePlus />}
              >
                <FormattedMessage id="memos-write" />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<IconInfoCircle />}
              >
                <FormattedMessage id="employee-details" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EmployeeDetailsCard;
