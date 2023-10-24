import React from "react";
import { toast } from "react-toastify";

export class AddEmployee extends React.Component {
  state = {
    name: "",
    salary: "",
    position: "",
  };

  handleChangeInput = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };
  handleDepartmentChange = (e) => {
    this.setState({ position: e.target.value });
  };
  handleOnClick = () => {
    toast.success(`Congratulations, you have added ${this.state.name}`);
    this.props.addUser(this.state);
  };

  render() {
    const { name, salary } = this.state;
    // dev, qa, manager, hr
    return (
      <div>
        <input name="name" value={name} onChange={this.handleChangeInput} />
        <input name="salary" value={salary} onChange={this.handleChangeInput} />
        <select
          name="department"
          value={this.state.position}
          onChange={this.handleDepartmentChange}
        >
          <option value="dev">Dev</option>
          <option value="qa">Qa</option>
          <option value="manager">Manager</option>
          <option value="hr">Hr</option>
        </select>
        <button onClick={this.handleOnClick}>Add New Employee</button>
      </div>
    );
  }
}
