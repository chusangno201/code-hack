import { useEffect, useState } from "react";

const messages = [
  "SYSTEM INITIALIZING...",
  "CONNECTING TO SECURE SERVER...",
  "SCANNING NETWORK...",
  "CHECKING SECURITY...",
  "ACCESS GRANTED."
];

function Typewriter() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentMessage = messages[messageIndex];

    if (text.length < currentMessage.length) {
      const timer = setTimeout(() => {
        setText(
          currentMessage.slice(
            0,
            text.length + 1
          )
        );
      }, 70);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setText("");

      setMessageIndex((oldIndex) => {
        return (
          oldIndex + 1
        ) % messages.length;
      });
    }, 1300);

    return () => clearTimeout(timer);

  }, [text, messageIndex]);

  return (
    <div className="typing">
      <span className="prompt">
        &gt;
      </span>

      <span>
        {text}
      </span>

      <span className="cursor">
        █
      </span>
    </div>
  );
}

export default function App() {
  return (
    <main className="page">

      <img
        className="background"
        src="/cyber-hero.jpeg"
        alt="Cyber Background"
      />

      <div className="overlay"></div>

      <div className="scanlines"></div>

      <section className="terminal">

        <div className="terminal-header">

          <div className="buttons">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="title">
            SECURE TERMINAL // 2026
          </div>

        </div>

        <div className="terminal-content">

          <div className="label">
            CYBER SECURITY SYSTEM
          </div>

          <Typewriter />

          <div className="info">

            <div>
              <small>STATUS</small>
              <strong>ONLINE</strong>
            </div>

            <div>
              <small>SECURITY</small>
              <strong>ACTIVE</strong>
            </div>

            <div>
              <small>NETWORK</small>
              <strong>MONITORING</strong>
            </div>

          </div>

        </div>

      </section>

      <div className="online-status">
        <span></span>
        SYSTEM ONLINE
      </div>

    </main>
  );
}
