import React, { Component } from 'react'
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'


class CatNew extends Component {
constructor(props) {
  super(props)
  this.state = {
    form: {
      name: "",
      age: "",
      gender: "",
      breed: "",
      enjoys: "",
      img: ""
    },
    submitted: false
  }
}

handleChange = (e) => {
  let { form } = this.state
  form[e.target.name] = e.target.value
  this.setState({form: form})
}

handleSubmit = () => {
  this.props.createNewCat(this.state.form)
  this.setState({submitted: true})
}

  render() {

    return (
      <div className="body-container">
        <h3>I am the Cat New</h3>
        <Form>
          <FormGroup>
            <Label for="name">
              Cat's Name
            </Label>
            <Input name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.name}>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="age">
              Cat's Age
            </Label>
            <Input name="age"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.age}>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="gender">
              Cat's Gender
            </Label>
            <Input name="gender"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.gender}>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="breed">
              Cat's Breed
            </Label>
            <Input name="breed"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.breed}>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="enjoys">
              Cat's Hobbies and Enjoyments
            </Label>
            <Input name="enjoys"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.enjoys}>
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
             value={this.state.form.img} 
             />
               <FormText>
                 Upload a photo for your cat's profile!
              </FormText>
          </FormGroup>

          <Button 
            name="submit"
            onClick={this.handleSubmit}>
            Join The Litter
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/catindex" />}
      </div>
    )
  }
}
export default CatNew