import React from "react";
import { EzAppLayout, EzModal, EzField } from "@ezcater/recipe";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [choice, setChoice] = React.useState("some default text");

  React.useEffect(
    function openModalUponClosing() {
      const id = setTimeout(setIsOpen, 1000, true);
      return () => clearTimeout(id);
    },
    [isOpen]
  );

  return (
    <EzAppLayout>
      <EzModal
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        dismissLabel="Dismiss"
        headerText="Header goes here"
      >
        <EzField
          type="textarea"
          label="Select dropdown"
          placeholder="Choose..."
          value={choice}
          autoFocus
          onChange={(e) => console.log(e) || setChoice(e.target.value)}
        />
        {choice}
      </EzModal>
    </EzAppLayout>
  );
}
