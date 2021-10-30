import React, { Component } from 'react'
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateCat: {
        name: "",
        age: "",
        gender: "",
        breed: "",
        enjoys: "",
        img: ""
      }
    }
  }
  
  handleChange = (e) => {
    let { updateCat } = this.state
    updateCat[e.target.name] = e.target.value
    this.setState({form: updateCat})
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.updateCat)
    this.setState({submitted: true})
  }


  render() {
    console.log(this.state.updateCat);
    return (
      <div className="body-container">
        <h3 id="edit-title">Update Your Cat</h3>
        <Form>
          <FormGroup>
            <Label for="name">
              Cat's Name
            </Label>
            <Input name="name"
            placeholder={this.props.cat.name}
            type="text"
            onChange={this.handleChange}
            value={this.state.updateCat.name}>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="age">
              Cat's Age
            </Label>
            <Input name="age"
            placeholder={this.props.cat.age}
            type="text"
            onChange={this.handleChange}
            value={this.state.updateCat.age}>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="gender">
              Cat's Gender
            </Label>
            <Input name="gender"
            placeholder={this.props.cat.gender}
            type="text"
            onChange={this.handleChange}
            value={this.state.updateCat.gender}>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="breed">
              Cat's Breed
            </Label>
            <Input name="breed"
            placeholder={this.props.cat.breed}
            type="text"
            onChange={this.handleChange}
            value={this.state.updateCat.breed}>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="enjoys">
              Cat's Hobbies and Enjoyments
            </Label>
            <Input name="enjoys"
            placeholder={this.props.cat.enjoys}
            type="text"
            onChange={this.handleChange}
            value={this.state.updateCat.enjoys}>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="img">
               Cat Photo
             </Label>
           <Input
             name="img"
             type="file"
              onChange={this.handleChange}
             value={this.state.updateCat.img} 
             />
               <FormText>
                 Upload a photo for your cat's profile!
              </FormText>
          </FormGroup>

          <Button 
            name="submit"
            onClick={this.handleSubmit}>
            Update Kitty
          </Button>
          {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}
        </Form>

            
  
      </div>
    )
  }
}
export default CatEdit
