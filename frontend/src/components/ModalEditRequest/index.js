/* eslint-disable no-unneeded-ternary */
/* eslint-disable prefer-destructuring */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Header,
  Icon,
  Modal,
  TextArea,
  Message,
} from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import frLocale from 'date-fns/locale/fr';
import DateFnsUtils from '@date-io/date-fns';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import './modalEditRequest.scss';

const ModalEditRequest = ({
  request,
  getRequestId,
  getRequestDate,
  getRequestHour,
  submitSetRequest,
  changeFieldRequest,
  changeFieldDateRequest,
  changeFieldHourRequest,
  requestDate,
  RequestBody,
  requestHour,
  isOpen,
  openSuccessMessage,
  closeSuccessMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitSetRequest();
    openSuccessMessage();
  };

  const handleClick = () => {
    getRequestId(request.id);
    getRequestDate(request.reservationDate);
    getRequestHour(request.reservationHour);
  };

  const handleChangeDescription = (evt) => {
    changeFieldRequest(evt.target.value, evt.target.name);
  };

  // console.log(changeDateEditFormat(requestDate));

  const handleDate = (date) => {
    changeFieldDateRequest(date);
  };
  const handleHour = (date) => {
    changeFieldHourRequest(date);
  };


  const reservationDate = request.reservationDate;
  const reservationHour = request.reservationHour;
  // console.log(reservationHour);

  const handleMessageClose = (event, reason) => {
    console.log(event);
    if (reason === 'clickaway') {
      return;
    }

    closeSuccessMessage();
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


  return (
    <>
      <Modal trigger={<Button onClick={handleClick}>Modifier</Button>} closeIcon>
        <Header icon="pencil alternate" content="Modifier ma demande" />
        <form onSubmit={handleSubmit}>
          <Modal.Content>
            <div className="modaleEditSkill_infoMessage">
              <Message compact>
                <i className="info circle icon" /> Une fois acceptée par votre JobWorker vous ne serez plus en mesure de modifier votre demande
              </Message>
            </div>
            <Snackbar
              open={isOpen}
              autoHideDuration={6000}
              onClose={handleMessageClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Alert onClose={handleMessageClose} severity="success">
                vos modifications ont bien été prise en compte !
              </Alert>
            </Snackbar>
            <MuiPickersUtilsProvider locale={frLocale} utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Choisissez une date"
                  format="dd/MM/yyyy"
                  type="datetime-fr"
                  name="requestDate"
                  value={requestDate ? requestDate : reservationDate}
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
                  format="HH:mm"
                  label="Choisissez une heure"
                  value={requestHour ? requestHour : reservationHour}
                  onChange={handleHour}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Modal.Content>
          <Modal.Content className="modal_edit_request_textarea">
            <TextArea onChange={handleChangeDescription} name="requestBody" className="modalTextArea_content" placeholder={request.body} defaultValue={RequestBody}/>
          </Modal.Content>
          <Modal.Actions className="modal_edit_action_button">
            <Button color="green">
              <Icon name="checkmark" /> Valider
            </Button>
          </Modal.Actions>
        </form>
      </Modal>
    </>
  );
};

ModalEditRequest.propTypes = {
  /** func with param */
  getRequestId: PropTypes.func.isRequired,
  getRequestDate: PropTypes.func.isRequired,
  getRequestHour: PropTypes.func.isRequired,
  /** func with param {newValue} {inputName} */
  changeFieldRequest: PropTypes.func.isRequired,
  /** func with param {newHour} */
  changeFieldHourRequest: PropTypes.func.isRequired,
  /** func with param {newDate} */
  changeFieldDateRequest: PropTypes.func.isRequired,
  /** fucn with no param */
  requestDate: PropTypes.string.isRequired,
  RequestBody: PropTypes.string.isRequired,
  requestHour: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openSuccessMessage: PropTypes.bool.isRequired,
  closeSuccessMessage: PropTypes.bool.isRequired,
  submitSetRequest: PropTypes.func.isRequired,
  request: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default ModalEditRequest;
