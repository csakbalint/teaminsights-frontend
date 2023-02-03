// third-party
// assets
import {
  IconDashboard,
  IconDice,
  IconFileLike,
  IconFileReport,
  IconFileText,
  IconSitemap,
  IconUsers,
} from '@tabler/icons';
import { FormattedMessage } from 'react-intl';
import { NavItemType } from 'types';

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [
    {
      id: 'dashboard',
      type: 'group',
      title: ' ',
      children: [
        {
          id: 'dashboard',
          title: <FormattedMessage id="dashboard" />,
          icon: IconDashboard,
          type: 'item',
          url: '/dashboard',
        },
      ],
    },
    {
      id: 'team',
      type: 'group',
      title: <FormattedMessage id="team" />,
      children: [
        {
          id: 'members',
          title: <FormattedMessage id="members" />,
          icon: IconUsers,
          type: 'item',
          url: '/members',
        },
        {
          id: 'skill-matrix',
          title: <FormattedMessage id="skill-matrix" />,
          icon: IconDice,
          type: 'item',
          url: '/skill-matrix',
        },
        {
          id: 'Team',
          title: <FormattedMessage id="team" />,
          icon: IconSitemap,
          type: 'item',
          url: '/team',
        },
      ],
    },
    {
      id: 'notes',
      type: 'group',
      title: <FormattedMessage id="notes" />,
      children: [
        {
          id: 'memos',
          title: <FormattedMessage id="memos" />,
          icon: IconFileText,
          type: 'item',
          url: '/memos',
        },
        {
          id: 'reviews',
          title: <FormattedMessage id="reviews" />,
          icon: IconFileReport,
          type: 'item',
          url: '/reviews',
        },
        {
          id: 'feedbacks',
          title: <FormattedMessage id="feedbacks" />,
          icon: IconFileLike,
          type: 'item',
          url: '/feedbacks',
        },
      ],
    },
  ],
};

export default menuItems;
