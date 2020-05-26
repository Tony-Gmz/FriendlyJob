import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './select.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ModalReservationSelect = () => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Choissisez le service demandé</InputLabel>
        <Select className="modal_input_select" defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>Les services</em>
          </MenuItem>
          <ListSubheader>Aide à la personne</ListSubheader>
          <MenuItem value={1}>Ménage</MenuItem>
          <MenuItem value={2}>Visite à domicile</MenuItem>
          <MenuItem value={3}>Administratif</MenuItem>
          <MenuItem value={4}>Preparation/Livraison de repas</MenuItem>
          <MenuItem value={5}>Faire les course</MenuItem>
          <ListSubheader>Autre service</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default ModalReservationSelect;
