import ExploreScreen from '@/components/navigations/ExploreScreen';
import MapScreen from '@/components/navigations/MapScreen';
import MessagesScreen from '@/components/navigations/MessagesScreen';
import ProfileScreen from '@/components/navigations/ProfileScreen';
import CreateHangout from '@/components/navigations/CreateHangout';
import MapIcon from '@/components/UI/atoms/Icons/MapIcon';
import SearchIcon from '@/components/UI/atoms/Icons/SearchIcon';
import EnvelopeIcon from '@/components/UI/atoms/Icons/EnvelopeIcon';
import UserIcon from '@/components/UI/atoms/Icons/UserIcon';
import PlusIcon from '@/components/UI/atoms/Icons/PlusIcon';
import TabBarItem from '@/components/business/MainNavigation/TabBarItem';
import CircleButton from '@/components/business/MainNavigation/CircleButton';

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
