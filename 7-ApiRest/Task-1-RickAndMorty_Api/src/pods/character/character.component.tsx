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
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    // <Formik
    //   onSubmit={onSave}
    //   initialValues={character}
    //   enableReinitialize={true}
    //   validate={formValidation.validateForm}
    // >
    //   {() => (
    //     <Form className={classes.root}>
    //       <TextFieldComponent name="name" label="Name" />
    //       <TextFieldComponent name="address" label="Address" />
    //       <RatingComponent name="rating" max={5} />
    //       {/* <SelectComponent name="city" label="City" items={cities} /> */}
    //       <TextFieldComponent
    //         name="description"
    //         label="Description"
    //         multiline={true}
    //         rows={3}
    //         rowsMax={5}
    //       />
    //       <Button type="submit" variant="contained" color="primary">
    //         Save
    //       </Button>
    //     </Form>
    //   )}
    // </Formik>
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="Character" src={character.picture}></Avatar>
          }
          title={character.name}
          subheader={character.gender}
        />
        <CardContent>
          <div>
            <CardMedia
              image={character.picture}
              title={character.name}
              style={{ height: 0, paddingTop: '56.25%', maxHeight: '100px' }}
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
              <div style={{ display: 'flex' }}>
                <Typography variant="subtitle1" gutterBottom>
                  Type:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {character.type.length ? character.type : '-'}
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography variant="subtitle1" gutterBottom>
                  Species:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {character.species}
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
