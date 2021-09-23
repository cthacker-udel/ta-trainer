import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Card } from '../interfaces/card';

export function AddCardModal({visible, setVisible, addCard}: 
  {visible: boolean, setVisible: (b: boolean)=>void,
  addCard: (c: Card) => void}): JSX.Element {
    const [prompt, setPrompt] = useState<string>("PROMPT TEXT");
    const [answer, setAnswer] = useState<string>("ANSWER TEXT");

    function saveCard() {
      addCard({
        id: Math.random(),
        kind: "Custom",
        prompt, answer
      });
      setVisible(false);
    }

    const hide = () => setVisible(false);
    return (
    <Modal show={visible} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Card</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="addCardForm.promptTextArea">
          <Form.Label>Prompt</Form.Label>
          <Form.Control as="textarea" rows={3}
            value={prompt}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(ev.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="addCardForm.answerTextArea">
          <Form.Label>Suggested Answer</Form.Label>
          <Form.Control as="textarea" rows={3} 
            value={answer}
            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setAnswer(ev.target.value)}/>
        </Form.Group>
      </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={hide}>Close</Button>
        <Button variant="primary" data-testid="save-card-button" onClick={saveCard}>Save changes</Button>
      </Modal.Footer>
    </Modal>)
}