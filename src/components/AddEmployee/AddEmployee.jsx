import React from "react";

export class AddEmployee extends React.Component {
  state = {
    name: "",
    salary: "",
    position: "",
  };

  handleOnSubmit = (e) => {
    const { name } = this.state;
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    this.props.addUser(this.state);
    this.setState({
      name: "",
      salary: "",
      position: "",
    });
  };

  handleChangeInput = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };
  handleDepartmentChange = (e) => {
    this.setState({ position: e.target.value });
  };

  render() {
    const { name, salary } = this.state;
    // dev, qa, manager, hr
    return (
      <form action="" onSubmit={this.handleOnSubmit}>
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
        <button>Add New Employee</button>
      </form>
    );
  }
}
