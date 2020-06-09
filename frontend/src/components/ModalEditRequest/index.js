import React, { useEffect } from 'react';
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
import { changeDateEditFormat } from 'src/utils';

const ModalEditRequest = ({ request, getCommentId, getRequestDate, getRequestHour, submitSetRequest, changeFieldRequest, changeFieldDateRequest, changeFieldHourRequest, requestDate, requestHour, editedDate, editedHour }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitSetRequest();
  };

  const handleClick = () => {
    getCommentId(request.id);
    getRequestDate(request.reservationDate);
    getRequestHour(request.reservationHour);
  };

  const handleChangeDescription = (evt) => {
    changeFieldRequest(evt.target.value, evt.target.name);
  };

  // console.log(changeDateEditFormat(requestDate));

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

  /* console.log(requestHour);
  let hour = requestHour.slice(0, 2);
  hour = ('0' + (hour) - 2).slice(0, 2);
  console.log(hour);
  let minutes = requestHour.slice(2, 4);
  console.log(minutes);
  
  console.log(hour); */


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
              format="dd/MM/yyyy"
              type="datetime-fr"
              name="requestDate"
              value={changeDateEditFormat(requestDate)}
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
              format="hh:mm"
              label="Choisissez une heure"
              value={requestHour}
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
