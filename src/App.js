import React, { useEffect, useState } from "react";
import { Employees } from "./components/Employees/Employees";
import { AddEmployee } from "./components/AddEmployee/AddEmployee";
import { SearchUser } from "./components/SearchUser/SearchUser";
import { Filter } from "./components/Filter/Filter";
import { toast } from "react-toastify";

const App = () => {
  // state = {
  // 	employees: [

  // 	],
  // 	filter: '',
  // 	department: 'all',
  // }
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(window.localStorage.getItem("employees"));
    if (savedData?.length) {
      setEmployees(savedData);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // componentDidUpdate(_, prevState) {
  // 	window.localStorage.setItem('employees', JSON.stringify(this.state))
  // }
  // componentDidMount() {
  // 	const savedData = JSON.parse(window.localStorage.getItem('employees'))
  // 	if (savedData) {
  // 		this.setState({ ...savedData })
  // 	}
  // }

  // render() {
  // 	const { employees } = this.state
  // 	const filteredData = this.getFilterData()
  // 	const btns = [...new Set(employees.map(user => user.position))]
  // }

  const handleDeleteUser = (id) => {
    setEmployees((prev) => prev.filter((user) => user.id !== id));
    toast.success(`Congratulations, you have deleted user`);
    // this.setState(prev => ({
    // 	employees: prev.employees.filter(),
    // }))
    // toast.success(`Congratulations, you have deleted user`)
  };
  const handleAddNewEmployee = (newData) => {
    const existingName = employees.find((item) => item.name === newData.name);
    if (existingName) {
      alert(`${newData.name} alredy exsists`);
    } else {
      const newUser = { id: crypto.randomUUID(), ...newData };
      setEmployees((prev) => [...prev, newUser]);
      // const { employees } = this.state
      // const existingName = employees.find(item => item.name === newData.name)
      // if (existingName) {
      // 	alert(`${newData.name} alredy exsists`)
      // } else {
      // 	const newUser = { id: crypto.randomUUID(), ...newData }
      // 	this.setState(prevState => ({
      // 		employees: [...prevState.employees, newUser],
      // 	}))
      // }
    }
  };
  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
    // this.setState({ filter: e.target.value })
  };
  const getFilterData = () => {
    return employees
      .filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))
      .filter((user) =>
        department === "all"
          ? user
          : user.position.toLowerCase().includes(department.toLowerCase())
      );
  };
  const handleChangeDepartment = (department) => {
    setDepartment(department);
    toast.info(`Congratulations, you have changed to ${department}`);
  };

  const btns = [...new Set(employees.map((user) => user.position))];
  return (
    <div>
      <AddEmployee addUser={handleAddNewEmployee} />
      <SearchUser setFilter={handleChangeFilter} />
      <br />
      <Filter onChangeDepartment={handleChangeDepartment} btns={btns} />
      <Employees deleteUser={handleDeleteUser} dataEmployee={getFilterData()} />
    </div>
  );
};

export default App;
