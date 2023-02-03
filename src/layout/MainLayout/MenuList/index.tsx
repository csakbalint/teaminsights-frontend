import { Typography, useMediaQuery } from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import { memo } from 'react';
import { NavItemType } from 'types';

import { HORIZONTAL_MAX_ITEM } from 'config';
// project imports
import menu from 'config/menu-items';
import { LAYOUT_CONST } from 'constant';
import useConfig from 'hooks/useConfig';

import NavGroup from './NavGroup';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  const { layout } = useConfig();

  // last menu-item to show in horizontal menu bar
  const lastItem =
    layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && !matchDownMd
      ? HORIZONTAL_MAX_ITEM
      : null;

  let lastItemIndex = menu.items.length - 1;
  let remItems: NavItemType[] = [];
  let lastItemId: string;

  if (lastItem && lastItem < menu.items.length) {
    lastItemId = menu.items[lastItem - 1].id!;
    lastItemIndex = lastItem - 1;
    remItems = menu.items
      .slice(lastItem - 1, menu.items.length)
      .map((item) => ({
        title: item.title,
        elements: item.children,
      }));
  }

  const navItems = menu.items.slice(0, lastItemIndex + 1).map((item) => {
    switch (item.type) {
      case 'group':
        return (
          <NavGroup
            key={item.id}
            item={item}
            lastItem={lastItem!}
            remItems={remItems}
            lastItemId={lastItemId}
          />
        );
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default memo(MenuList);
