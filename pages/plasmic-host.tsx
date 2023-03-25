import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';

export function Timer(props: {
  onTimeChange: (time: number) => void;
}) {
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => setTime(t => t+1), 1000);
    return () => clearInterval(timer);
  }, []);
  React.useEffect(() => {
    props.onTimeChange(time);
  }, [time, props.onTimeChange]);

  return <>{time}</>;
}

registerComponent(Timer, {
  name: "Timer",
  importPath:"./pages/plasmic-host",
  props: {
    onTimeChange: {
      type: "eventHandler",
      argTypes: [{name: "time", type: "number"}]
    }
  },
  states: {
    elapsedTime: {
      type: "readonly",
      onChangeProp: "onTimeChange",
      variableType: "number",
      initVal: 0
    }
  }
})

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
