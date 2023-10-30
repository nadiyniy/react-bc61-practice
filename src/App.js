import React, { useEffect, useReducer } from "react";
import { Employees } from "./components/Employees/Employees";
import { AddEmployee } from "./components/AddEmployee/AddEmployee";
import { SearchUser } from "./components/SearchUser/SearchUser";
import { Filter } from "./components/Filter/Filter";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "./context/ContextProvider";
import { employeesReducer, initialState } from "./store/reducer";
import { useModal } from "./hook/useModal";
import { Modal } from "./components/Modal/Modal";
//PLAN
// - Додати контекст для юзера
// - Використати React Hook Form для форми юзера
// - Зробити рефакторінг на useReducer

const App = () => {
  const [state, dispatch] = useReducer(employeesReducer, initialState);
  const { employees, filter, department } = state;
  const { isOpen, open, close } = useModal();
  // const [employees, setEmployees] = useState([]);
  // const [filter, setFilter] = useState('');
  // const [department, setDepartment] = useState('');

  const { login, logout, user, isLogin } = useContext(UserContext);

  useEffect(() => {
    const savedData = JSON.parse(window.localStorage.getItem("employees"));
    if (savedData?.length) {
      dispatch({ type: "loadFromLS", payload: savedData });
      // setEmployees(savedData);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleDeleteUser = (id) => {
    dispatch({ type: "deleteUser", payload: id });
    // setEmployees((prev) => prev.filter((user) => user.id !== id));
    toast.success(`Congratulations, you have deleted user`);
  };

  const handleAddNewEmployee = (newData) => {
    const existingName = employees.find((item) => item.name === newData.name);
    if (existingName) {
      alert(`${newData.name} already exsists`);
    } else {
      const newUser = { id: crypto.randomUUID(), ...newData };
      dispatch({ type: "addUser", payload: newUser });
      // setEmployees((prev) => [...prev, newUser]);
    }
  };
  const handleChangeFilter = (e) => {
    dispatch({ type: "changeFilter", payload: e.target.value });
    // setFilter(e.target.value);
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
    dispatch({ type: "changeDepartment", payload: department });
    // setDepartment(department);
    toast.info(`Congratulations, you have changed to ${department}`);
  };

  const btns = [...new Set(employees.map((user) => user.position))];
  return (
    <div>
      {!isOpen ? (
        <button onClick={open}>Toggle modal</button>
      ) : (
        <button onClick={close}>Close</button>
      )}
      {isOpen ? (
        <Modal closeModal={close}>
          <h1>Helllo</h1>
        </Modal>
      ) : null}
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
