import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

class ModalExampleCloseConfig extends Component {
  state = { open: false };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  close = () => this.setState({ open: false });

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;

    return (
      <div>
        <Button onClick={this.closeConfigShow(false, true)}>
          Laisser un commentaire
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Service realiser par *Karim* pour *aide a la personne*</Modal.Header>
          <Modal.Content>
            <label>Commentaire : </label>
            <input
              type="textarea"
              placeholder="Dites ce que vous avez pensez du service de notre JobWorker"
            />
          </Modal.Content>
          <Modal.Content>
            <label>Evaluation : 
            <div className="ui star rating" role="radiogroup" tabindex="-1">
              <i
                tabindex="0"
                aria-checked="false"
                aria-posinset="1"
                aria-setsize="4"
                class="active icon"
                role="radio"
              />
              <i
                tabindex="0"
                aria-checked="false"
                aria-posinset="2"
                aria-setsize="4"
                class="active icon"
                role="radio"
              />
              <i
                tabindex="0"
                aria-checked="true"
                aria-posinset="3"
                aria-setsize="4"
                class="active icon"
                role="radio"
              />
              <i
                tabindex="0"
                aria-checked="false"
                aria-posinset="4"
                aria-setsize="4"
                class="active icon"
                role="radio"
              />
            </div>
            </label>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              Annuler
            </Button>
            <Button
              onClick={this.close}
              positive
              labelPosition="right"
              icon="checkmark"
              content="Valider"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalExampleCloseConfig;
