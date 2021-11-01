import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from '../CatEdit'


Enzyme.configure({ adapter: new Adapter() })


describe("When CatEdit renders", () => {

    it("displays a Form", () => {

        const catEdit = shallow(<CatEdit />)
        const newForm = catEdit.find("Form")
        
        expect(newForm.length).toEqual(1)
    })
})