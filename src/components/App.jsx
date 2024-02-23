import FeadbackOptions from './FeadbackForm/FeadbackOptions';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';
import { useState } from 'react';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLiveFeadback = ({ value }) => {
    setState(prevState => ({ ...prevState, [value]: prevState[value] + 1 }));
  };

  const countTotalFeadback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeadbackPercentage = () => {
    return Math.round((100 * state.good) / countTotalFeadback());
  };

  const totalFeadback = countTotalFeadback();
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave your featbeak">
        <FeadbackOptions
          options={Object.keys(state)}
          onLiveFeadback={option => onLiveFeadback({ value: option })}
        />
      </Section>
      <Section title="Statistics">
        {totalFeadback > 0 ? (
          <Statistic
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeadback}
            positivePercentage={countPositiveFeadbackPercentage}
          />
        ) : (
          <p>'There is no feedback'</p>
        )}
      </Section>
    </div>
  );
};

export default App;
