import React from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
  TextArea,
} from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import frLocale from 'date-fns/locale/fr';
import DateFnsUtils from '@date-io/date-fns';

const ModalEditRequest = ({ request, getCommentId, submitSetRequest, changeFieldRequest, changeFieldDateRequest, changeFieldHourRequest  }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitSetRequest();
  };

  const handleClick = () => {
    getCommentId(request.id);
  };

  const handleChangeDescription = (evt) => {
    changeFieldRequest(evt.target.value, evt.target.name);
  };


 /*  const selectedDate = Date();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }; */

  const handleDate = (date) => {
    // Methode to listen the change on the calendar et send the result in the reducer
    let month = (date.getMonth() + 1);
    month = month.toString();
    month = ('0' + (month)).slice(-2);
    // console.log(month);
    // console.log(date.getFullYear());
    const years = date.getFullYear().toString();
    const days = date.getDate().toString();
    const newDate = `${years}-${month}-${days}`;
    // console.log(newDate);
    changeFieldDateRequest(newDate);
  };
  const handleHour = (date) => {
    // console.log(date);
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    const hour = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const newHour = `${hour}h${minutes}`;
    // console.log(newHour);
    changeFieldHourRequest(newHour);
  };

  const selectedDate = Date();

  return (
    <Modal trigger={<Button onClick={handleClick}>Modifier</Button>} closeIcon>
      <Header icon='pencil alternate' content='Modifier ma demande' />
      <form onSubmit={handleSubmit}>
        <Modal.Content>
        <MuiPickersUtilsProvider locale={frLocale} utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Choisissez une date"
              format="MM/dd/yyyy"
              type="datetime-fr"
              name="requestDate"
              value={selectedDate}
              onChange={handleDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              DateTimeFormat={Intl.DateTimeFormat}
              locale="fr"
            />
            <KeyboardTimePicker
              locale={frLocale}
              ampm={false}
              margin="normal"
              id="time-picker"
              name="requestHour"
              label="Choisissez une heure"
              value={selectedDate}
              onChange={handleHour}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        </Modal.Content>
        <Modal.Content>
          <TextArea onChange={handleChangeDescription} name="requestBody" className="modalTextArea_content" placeholder="Décrivez précisément ce dont vous avez besoin..." />
        </Modal.Content>
        <Modal.Actions>
          <Button color='red'>
            <Icon name='remove' /> Annuler
          </Button>
          <Button color='green'>
            <Icon name='checkmark' /> Valider
          </Button>
        </Modal.Actions>
      </form>
    </Modal>
  );
};


export default ModalEditRequest;
