
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/host';

// @ts-ignore
function TimeElapsed({  onTimeChange }) {
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => {
        const newTime = t + 1;

        return newTime;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  React.useEffect(() => {
    onTimeChange(time);
  }, [time]);

  return <></>;
}
registerComponent(TimeElapsed, {
  name: "TimeElapsed",
  importPath: "pages/plasmic-host",
  props: {

    onTimeChange: {
      type: "eventHandler",
      argTypes: [{ name: "elapsedTime", type: "number" }],
    },
  },
  states: {
    elapsedTime: {
      type: "readonly",
      onChangeProp: "onTimeChange",
      initVal: 0, // Add this line to set the initial value of the elapsedTime state
    },
  },
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
    