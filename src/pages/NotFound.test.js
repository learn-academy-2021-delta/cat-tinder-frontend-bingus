import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('When NotFound loads...',()=>{

    it('displays an img', ()=>{
   const notfoundWrapper = shallow(<NotFound/>)
   const imgWrapper = notfoundWrapper.find('img')
   
   expect(imgWrapper.length).toEqual(1)
   })
   })
   