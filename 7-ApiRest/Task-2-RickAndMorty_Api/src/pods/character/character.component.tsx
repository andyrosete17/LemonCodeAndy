import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
      {() => (
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="Character" src={character.picture}></Avatar>
            }
            title={character.name}
            subheader={character.gender}
          />
          <CardContent>
            <Form className={classes.root}>
              <div>
                <CardMedia
                  image={character.picture}
                  title={character.name}
                  style={{
                    height: 0,
                    paddingTop: '56.25%',
                    maxHeight: '100px',
                  }}
                />
                <div>
                  <div style={{ display: 'flex' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Status:
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {character.status}
                    </Typography>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Origin:
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {character.origin}
                    </Typography>
                  </div>
                </div>
              </div>
              <TextFieldComponent
                name="bestSentence"
                label="Best Sentence"
                multiline={true}
              />
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Form>
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};
