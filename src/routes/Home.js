import React from 'react';

export default class Home extends React.Component {
  componentWillMount() {
    console.log('hi');
    this.props.history.push('/home?ijustgotpushed=true');
  }

  render() {
    return <div>hi</div>;
   
  }
}