import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should be able to add numbers together', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonPlus = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals');
    button1.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should subtract one number from another and return the total', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');

  })


  it('should multiply 2 numbers and return a total', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide one number by anoter and return the result', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number clicks', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('217');
  })

  it('should chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    button2.simulate('click');
    buttonMultiply.simulate('click');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button1.simulate('click');
    buttonSubtract.simulate('click');
    button7.simulate('click');
    buttonDivide.simulate('click');
    button2.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    const buttonClear = container.find('#clear');
    button2.simulate('click');
    buttonMultiply.simulate('click');
    button7.simulate('click');
    buttonClear.simulate('click');
    buttonSubtract.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('1');



  })



})

