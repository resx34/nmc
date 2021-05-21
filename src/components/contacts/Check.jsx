import React, { Component } from 'react';
import Checkbox from './CheckBox';

const items = [
  'One',
  'Two',
  'Three',
  'Four'
];


class Application extends Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

//   handleFormSubmit = formSubmitEvent => {
//     formSubmitEvent.preventDefault();

//     for (const checkbox of this.selectedCheckboxes) {
//       console.log(checkbox, 'is selected.');
//     }
//   }

    handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      if (checkbox === "One") {
          console.log('aaa')
      } else {
         console.log('fff') 
      }
    }
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Ответить</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Application;