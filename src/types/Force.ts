import { Formation } from 'src/types/Formation';
import { Unit } from 'src/types/Unit';

export interface Force {
  // Author, created at, etc.
  meta: {
    author: string;
  }

  // Faction, diagram, etc.
  general: {
    faction: string;
    book: string;
  }

  formations: Formation[];
  units: Unit[];
}
