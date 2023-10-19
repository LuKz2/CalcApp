import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

const init = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}
export default class App extends Component {
  state = { ...init }

  addDig = n => {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return
    }
    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
      this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }
  }

  clearMemory = () => {
   this.setState({...init})
  }

  setOperation = operation => {

  }

  render() {
    return (

      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory} />
          <Button label='/' operation onClick={this.setOperation} />
          <Button label='7' onClick={this.addDig} />
          <Button label='8' onClick={this.addDig} />
          <Button label='9' onClick={this.addDig} />
          <Button label='*' operation onClick={this.setOperation} />
          <Button label='4' onClick={this.addDig} />
          <Button label='5' onClick={this.addDig} />
          <Button label='6' onClick={this.addDig} />
          <Button label='-' operation onClick={this.setOperation} />
          <Button label='1' onClick={this.addDig} />
          <Button label='2' onClick={this.addDig} />
          <Button label='3' onClick={this.addDig} />
          <Button label='+' operation onClick={this.setOperation} />
          <Button label='0' double onClick={this.addDig} />
          <Button label='.' onClick={this.addDig} />
          <Button label='=' operation onClick={this.setOperation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
