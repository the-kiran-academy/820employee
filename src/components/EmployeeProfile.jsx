import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EmployeeProfile() {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
   
    axios
      .get(`http://localhost:8080/getById?id=${id}`)
      .then((response) => setEmployee(response.data))
      .catch((error)=> alert(error.message || 'Something went wrong'));
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Update Employee
        </h2>

        {/* ID Field */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">ID</label>
          <input
            type="number"
            name="id"
            value={employee.id}
            onChange={inputHandler}
            placeholder="Enter your ID"
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={inputHandler}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={inputHandler}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={employee.password}
            onChange={inputHandler}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EmployeeProfile;
