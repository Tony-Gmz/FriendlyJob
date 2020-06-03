
/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './selecSkill.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

const SkillSelectTag = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={skills}
        getOptionLabel={(option) => option.title}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Vos compètences" placeholder="Bricolage..." />
        )}
      />
    </div>
  );
}

const skills = [
  { title: 'jardinage' },
  { title: 'bricolage', year: 1972 },

];

export default SkillSelectTag;
