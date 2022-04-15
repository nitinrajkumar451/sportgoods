// import React from 'react';
// import {render} from "@testing-library/react";
import App from "./App";
// import '@testing-library/jest-dom'
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
describe("Counter Testing",()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<App />);
    })
    test("renders learn react link", ()=>{
         
        expect(wrapper.find("h1").text()).toContain("This is counter app");    
    });
    test("renders a button with text 'Increment'",()=>{
        expect(wrapper.find('#increment-btn').text()).toBe('Increment');
    });
    test("renders initial value of the state in a div",()=>{
      expect(wrapper.find('#counter-value').text()).toBe("0");
    });
    test("render on the click increment the value of counter",()=>{
        wrapper.find('#increment-btn').simulate('click');
        expect(wrapper.find("#counter-value").text()).toBe("1");

    });
    test("renders a button with text 'Decrement'",()=>{
        expect(wrapper.find('#decrement-btn').text()).toBe('Decrement');
    });
    test("render on the click decrement the value of counter",()=>{
        wrapper.find('#increment-btn').simulate('click');
        wrapper.find('#decrement-btn').simulate('click');
        expect(wrapper.find("#counter-value").text()).toBe("0");

    });
    test("render on the click decrement the value of counter below 0",()=>{
        wrapper.find('#increment-btn').simulate('click');
        wrapper.find('#decrement-btn').simulate('click');
        wrapper.find('#decrement-btn').simulate('click');
        wrapper.find('#decrement-btn').simulate('click');
        wrapper.find('#decrement-btn').simulate('click');
        expect(wrapper.find("#counter-value").text()).toBe("0");

    });
})
