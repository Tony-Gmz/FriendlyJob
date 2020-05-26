import React from 'react';
import { Form, TextArea } from 'semantic-ui-react';


const ModalTextArea = () => (

  <Form className="modalTextArea">
    <TextArea className="modalTextArea_content" placeholder="Décrivez précisément ce dont vous avez besoin..." />
  </Form>
);

export default ModalTextArea;
