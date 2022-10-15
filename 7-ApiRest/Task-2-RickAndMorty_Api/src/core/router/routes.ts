import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  charactersCollection: string;
  characterDetails: string;
  // editHotel: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  charactersCollection: '/character',
  characterDetails: '/character/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'characterDetails'> {
  characterDetails: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  characterDetails: (id) => generatePath(switchRoutes.characterDetails, { id }),
};
