import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import {
  Button,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  Pagination,
  Typography,
} from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
// assets
import { IconSearch } from '@tabler/icons';
import React, { ReactElement } from 'react';
import { useQuery } from 'react-query';

import useAuth from 'hooks/useAuth';
// types
// project imports
import Layout from 'layout';
import { getEmployees } from 'services';
import { gridSpacing } from 'store/constant';

import Page from 'components/ui-component/Page';
import EmployeeDetailsCard from 'ui-component/cards/EmployeeDetailsCard';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| USER CARD STYLE 1 ||============================== //

const MembersPage = () => {
  const theme = useTheme();
  const { user } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<
    Element | ((element: Element) => Element) | null | undefined
  >(null);
  const handleClick = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [search, setSearch] = React.useState<string | undefined>('');
  const handleSearch = async (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | undefined,
  ) => {
    const query = event?.target.value;
    setSearch(query);
  };

  const { data: members } = useQuery(
    ['members', search],
    () => getEmployees({ query: search }),
    { keepPreviousData: true },
  );

  let membersResult: React.ReactElement | React.ReactElement[] = <></>;
  if (members) {
    membersResult = members.data.map((member, index) => (
      <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
        <EmployeeDetailsCard {...member} />
      </Grid>
    ));
  }

  return (
    <Page title="Members">
      <MainCard
        title={
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          >
            <Grid item>
              <Typography variant="h3">{user?.ledTeam.name}</Typography>
            </Grid>
            <Grid item>
              <OutlinedInput
                id="input-search-card-style1"
                placeholder="Search"
                value={search}
                onChange={handleSearch}
                startAdornment={
                  <InputAdornment position="start">
                    <IconSearch stroke={1.5} size="16px" />
                  </InputAdornment>
                }
                size="small"
              />
            </Grid>
          </Grid>
        }
      >
        <Grid container direction="row" spacing={gridSpacing}>
          {membersResult}
          {(members?.page ?? 1) > 1 && (
            <Grid item xs={12}>
              <Grid
                container
                justifyContent="space-between"
                spacing={gridSpacing}
              >
                <Grid item>
                  <Pagination count={members?.pageCount} color="primary" />
                </Grid>
                <Grid item>
                  <Button
                    variant="text"
                    size="large"
                    sx={{ color: theme.palette.grey[900] }}
                    color="inherit"
                    endIcon={<ExpandMoreRoundedIcon />}
                    onClick={handleClick}
                  >
                    10 Rows
                  </Button>
                  {anchorEl && (
                    <Menu
                      id="menu-user-card-style1"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                    >
                      <MenuItem onClick={handleClose}> 10 Rows</MenuItem>
                      <MenuItem onClick={handleClose}> 20 Rows</MenuItem>
                      <MenuItem onClick={handleClose}> 30 Rows </MenuItem>
                    </Menu>
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </MainCard>
    </Page>
  );
};

MembersPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MembersPage;
