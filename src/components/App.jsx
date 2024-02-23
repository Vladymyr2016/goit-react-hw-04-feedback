import FeadbackOptions from './FeadbackForm/FeadbackOptions';
import Statistic from './Statistic/Statistic';
import React, { Component } from 'react';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLiveFeadback = ({ value }) => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeadback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeadbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeadback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeadback = this.countTotalFeadback();
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
            options={Object.keys(this.state)}
            onLiveFeadback={option => this.onLiveFeadback({ value: option })}
          />
        </Section>
        <Section title="Statistics">
          {totalFeadback > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeadback}
              positivePercentage={this.countPositiveFeadbackPercentage}
            />
          ) : (
            <p>'There is no feedback'</p>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
