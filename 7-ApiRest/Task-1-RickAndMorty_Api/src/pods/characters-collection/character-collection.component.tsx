import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreate: () => void;
  onDetails: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onDetails, onDelete } = props;


  return (
    <div className={classes.root}>
      {/* <Button variant="contained" color="primary" onClick={onCreateHotel}>
        Add hotel
      </Button> */}

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              onDetails={onDetails}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
