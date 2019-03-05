// for creating the JSX Navigational Items Component
import React from "react";

// configure is used to configure the enzyme and make it adapt accroding to the version of react
// shallow function is used to render on the isolated component we are testing
import { configure, shallow } from "enzyme";

// adapter import
import Adapter from "enzyme-adapter-react-16";
import NavigationalItems from "./NavigationalItems"; 
import NavigationalItem from "./NavigationalItem/NavigationalItem";

configure({ adapter: new Adapter() });

describe("<NavigationalItems />", () => {
    it("should only render one <NavigationalItem /> on basis of active prop", () => {
        // passing JSX to the shallow method
        const wrapper = shallow(<NavigationalItems />);
        expect(wrapper.find(NavigationalItem)).toHaveLength(1);
    });
});