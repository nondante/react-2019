import React from "react";
import {shallow} from "enzyme";
import Register from "./Register";
import toJson from "enzyme-to-json";

describe("Register component", ()=>{
    const component = shallow(<Register/>);
    
    it("changes state when onInputChange is called",()=>{
        expect(component.state().email).toEqual("");
        component.instance().onInputChange({target: {name: "email", value:"mock value"}});
        expect(component.state().email).toEqual("mock value");
    });
});