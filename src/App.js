import React, { useEffect, useState } from "react";
import { Employees } from "./components/Employees/Employees";
import { AddEmployee } from "./components/AddEmployee/AddEmployee";
import { SearchUser } from "./components/SearchUser/SearchUser";
import { Filter } from "./components/Filter/Filter";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./context/ContextProvider";
//PLAN
// - Додати контекст для юзера
// - Використати React Hook Form для форми юзера
// - Зробити рефакторінг на useReducer

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [department, setDepartment] = useState("");
  const { login, logout, user, isLogin } = useContext(UserContext);
  useEffect(() => {
    const savedData = JSON.parse(window.localStorage.getItem("employees"));
    if (savedData?.length) {
      setEmployees(savedData);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleDeleteUser = (id) => {
    setEmployees((prev) => prev.filter((user) => user.id !== id));
    toast.success(`Congratulations, you have deleted user`);
  };
  const handleAddNewEmployee = (newData) => {
    const existingName = employees.find((item) => item.name === newData.name);
    if (existingName) {
      alert(`${newData.name} alredy exsists`);
    } else {
      const newUser = { id: crypto.randomUUID(), ...newData };
      setEmployees((prev) => [...prev, newUser]);
    }
  };
  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
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
      {isLogin ? (
        <button onClick={logout}>exit</button>
      ) : (
        <button onClick={() => login("Andre")}>enter</button>
      )}

      {user && <h1>Welcome {user}</h1>}
      <br />
      <Filter onChangeDepartment={handleChangeDepartment} btns={btns} />
      <Employees deleteUser={handleDeleteUser} dataEmployee={getFilterData()} />
    </div>
  );
};

export default App;
