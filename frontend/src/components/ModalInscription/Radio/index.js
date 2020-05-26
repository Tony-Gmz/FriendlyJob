import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './radio.scss';

const RadioInscription = () => (

  <FormControl className="radio_inscription" component="fieldset">
    <FormLabel component="legend">Besoin d'un service ou mettre en exergue vos compétences ? Choisissez votre rôle !</FormLabel>
    <RadioGroup className="radio_inscription_item" aria-label="gender" name="gender1">
      <FormControlLabel value="JobWorker" control={<Radio />} label="JobWorker" />
      <FormControlLabel value="male" control={<Radio />} label="FriendlyUser" />
    </RadioGroup>
  </FormControl>
);

export default RadioInscription;
