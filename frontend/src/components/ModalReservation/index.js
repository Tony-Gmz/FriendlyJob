import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  TextArea,
  Button,
  Message,
} from 'semantic-ui-react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import frLocale from 'date-fns/locale/fr';


// == Import style
import './modalReservation.scss';


// == Composant
const ModalReservation = ({ changeFieldRequest, submitRequest, currentJobWorkerDetail, changeFieldHourRequest, changeFieldDateRequest, requestDate, requestHour, displayHour, isSave, isOpen, openSuccessMessage, closeSuccessMessage, errorMessageReservation }) => {
  const { skills } = currentJobWorkerDetail;
  // console.log(skills);
  const selectedDate = Date();

  const handleChange = (evt) => {
    // console.log(`coucou j'envoi ${evt.target.value} + ${evt.target.name}`);
    changeFieldRequest(evt.target.value, evt.target.name);
  };
  // console.log(currentJobWorkerDetail);
  const handleSubmit = (evt) => {
    // console.log('coucou je suis le submit de la request');
    evt.preventDefault();
    submitRequest();
    openSuccessMessage();
  };
  const handleDate = (date) => {
    // console.log(newDate);
    changeFieldDateRequest(date);
  };

  const handleHour = (date) => {
    // console.log(date);
    // console.log(date.getHours());
    // console.log(date.getMinutes());
    changeFieldHourRequest(date);
  };

  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    closeSuccessMessage();
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div className="ModalReservation">
      <a href="#reservation"><Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }}>Reservation</Button></a>
      <div id="reservation" className="reservation">
        <div className="modal_block">
          <div className="modal_header">
            <p className="modal_title">Bienvenue dans notre espace Reservation</p>
          </div>
          <div className="modal_content">
            <div className="modal_select">
              <select name="currentSkill" onChange={handleChange} id="">
                <option value="select">Choisissez la compétence désirée</option>
                {skills.map((skill) => (
                  <option value={skill.service.id}>{skill.service.title}</option>
                ))}
              </select>
            </div>
            <div className="modal_text">
              <Form className="modalTextArea">
                <TextArea onChange={handleChange} name="requestBody" className="modalTextArea_content" placeholder="Décrivez précisément ce dont vous avez besoin..." />
              </Form>
            </div>
            <div className="modal_calendar" />
            <MuiPickersUtilsProvider locale={frLocale} utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  required
                  margin="normal"
                  id="date-picker-dialog"
                  label="Choisissez une date"
                  format="dd/MM/yyyy"
                  type="datetime-fr"
                  name="requestDate"
                  value={requestDate ? requestDate : selectedDate}
                  onChange={handleDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  DateTimeFormat={Intl.DateTimeFormat}
                  locale="fr"
                />
                <KeyboardTimePicker
                  required
                  locale={frLocale}
                  ampm={false}
                  margin="normal"
                  id="time-picker"
                  name="requestHour"
                  label="Choisissez une heure"
                  value={requestHour ? requestHour : selectedDate}
                  onChange={handleHour}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
          {isSave && (
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleMessageClose}>
              <Alert onClose={handleMessageClose} severity="success">
                votre reservation a  bien été prise en compte ! vous souhaitez acceder à vos <a href="/demandes">demandes</a> ?
              </Alert>
            </Snackbar>
          )}
          {errorMessageReservation && (
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleMessageClose}>
              <Alert onClose={handleMessageClose} severity="error">
                Une erreur s'est produite lors de votre reservation ! Verifiez que tous les champs soient rempli.
              </Alert>
            </Snackbar>
          )}
          <div>
            <form onSubmit={handleSubmit} className="div_submit">
              <a href="#"><Button style={{ backgroundColor: '#FF385C', color: '#FFFF' }} className="button_modalReservation_cancel" type="submit">Annuler</Button></a>
              <Button style={{ backgroundColor: '#303f9f', color: '#FFFF' }} className="button_modalReservation_validate" type="submit">Reserver</Button>
            </form>
            <a href="#" className="close_btn">close</a>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalReservation.propTypes = {
  /** func with param {newValue} {inputName} */
  changeFieldRequest: PropTypes.func.isRequired,
  /** func with param {newHour} */
  changeFieldHourRequest: PropTypes.func.isRequired,
  /** func with param {newDate} */
  changeFieldDateRequest: PropTypes.func.isRequired,
  /** func with no params */
  submitRequest: PropTypes.func.isRequired,
  currentJobWorkerDetail: PropTypes.arrayOf(
    PropTypes.shape({

    }).isRequired,
  ).isRequired,
};

// == Export
export default ModalReservation;
