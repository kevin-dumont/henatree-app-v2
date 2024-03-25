import ExploreScreen from '@navigations/ExploreScreen';
import MapScreen from '@navigations/MapScreen';
import MessagesScreen from '@navigations/MessagesScreen';
import ProfileScreen from '@navigations/ProfileScreen';
import CreateHangout from '@navigations/CreateHangout';
import MapIcon from '@components/atoms/Icons/MapIcon';
import SearchIcon from '@components/atoms/Icons/SearchIcon';
import EnvelopeIcon from '@components/atoms/Icons/EnvelopeIcon';
import UserIcon from '@components/atoms/Icons/UserIcon';
import PlusIcon from '@components/atoms/Icons/PlusIcon';
import TabBarItem from '@blocks/MainNavigation/TabBarItem';
import CircleButton from '@blocks/MainNavigation/CircleButton';

export const MENU_ITEMS = {
  explore: {
    label: 'Explorer',
    icon: MapIcon,
    screen: ExploreScreen,
    component: TabBarItem,
  },
  search: {
    label: 'Recherche',
    icon: SearchIcon,
    screen: MapScreen,
    component: TabBarItem,
  },
  add: {
    label: 'Create Hangout',
    icon: PlusIcon,
    screen: CreateHangout,
    component: CircleButton,
  },
  messages: {
    label: 'Messages',
    icon: EnvelopeIcon,
    screen: MessagesScreen,
    component: TabBarItem,
  },
  profile: {
    label: 'Profil',
    icon: UserIcon,
    screen: ProfileScreen,
    component: TabBarItem,
  },
};

export type MenuItemKey = keyof typeof MENU_ITEMS;
