import { useState } from 'react';

const initialPanels = [
  {
    id: 0,
    title: 'About',
    description:
      "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.",
    isActive: false,
  },
  {
    id: 1,
    title: 'Etymology',
    description:
      "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.",
    isActive: false,
  },
];

export default function Accordion() {
  const [panels, setPanels] = useState(initialPanels);

  function handleShowPanel(panelId) {
    setPanels(
      panels.map((panel) => {
        if (panel.id === panelId) {
          return { ...panel, isActive: true };
        }
        return { ...panel, isActive: false };
      })
    );
  }

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      {panels.map((panel) => (
        <Panel key={panel.id} panel={panel} onShowPanel={handleShowPanel}>
          {panel.description}
        </Panel>
      ))}
    </>
  );
}

function Panel({ panel, onShowPanel }) {
  return (
    <>
      <section>
        <h3>{panel.title}</h3>
        {panel.isActive ? (
          <p>{panel.description}</p>
        ) : (
          <button onClick={() => onShowPanel(panel.id)}>Show</button>
        )}
      </section>
    </>
  );
}
