import React from "react";
import { FaTrash } from "react-icons/fa";
import Dashboard from "./Dashboard";

const data = [
  {
    firstName: "Joshua",
    lastName: "Bakare",
    email: "josh.bakery@gmail.com",
    phone: "+2348012345678",
    role: "staff",
  },

  {
    firstName: "Joshua",
    lastName: "Bakare",
    email: "josh.bakery@gmail.com",
    phone: "+2348012345678",
    role: "staff",
  },

  {
    firstName: "Joshua",
    lastName: "Bakare",
    email: "josh.bakery@gmail.com",
    phone: "+2348012345678",
    role: "staff",
  },
];

function Test() {
  return (
    <>
      <table className="table">
        <thead>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>PHONE</th>
          <th>ROLE</th>
        </thead>

        <tbody>
          {data.map((el) => {
            return (
              <>
                <tr>
                  <td>{el.firstName}</td>
                  <td>{el.lastName}</td>
                  <td>{el.email}</td>
                  <td>{el.phone}</td>
                  <td>{el.role}</td>
                  <td>
                    <FaTrash />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Test;
