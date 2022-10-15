import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
// import { deleteHotel } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  console.log('characterCollection ===> ', characterCollection);
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  // const handleCreateHotel = () => {
  //   history.push(linkRoutes.createHotel);
  // };

  const handleDetails = (id: string) => {
    history.push(linkRoutes.characterDetails(id));
  };

  // const handleDelete = async (id: string) => {
  //   await deleteHotel(id);
  //   loadCharacterCollection();
  // };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreate={() => {}}
      onDetails={handleDetails}
      onDelete={() => {}}
    />
  );
};
