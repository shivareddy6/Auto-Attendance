import React, { useEffect, useState } from "react";
import { getStudentData, removeStudentFromDB } from "../../utils/fireBaseUtils";
import StudentAdd from "./StudentAdd";
// import {StudentItem} from "./StudentItem"
import "./styles.css";
export const StudentList = (props) => {
  // console.log(props.Students)
  let allStudents = [];
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setmodal] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      allStudents = await getStudentData();
      // console.log(stuData);
      setFilteredStudents(allStudents);
    };
    loadData();
  }, []);
  useEffect(() => {
    const loadData = async () => {
      allStudents = await getStudentData();
      // console.log(stuData);
      setFilteredStudents(allStudents);
    };
    loadData();
  }, [modal]);
  useEffect(() => {
    if (search === "") {
      setFilteredStudents(allStudents);
    } else {
      setFilteredStudents(() =>
        allStudents.filter((student) => student.name.includes(search))
      );
    }
  }, [search]);

  const onDelete = async (stud) => {
    await removeStudentFromDB(stud.id);
    allStudents = await getStudentData();
    // console.log(stuData);
    setFilteredStudents(allStudents);
  };

  return (
    <div className="container">
      <h3
        className="text-center my-3"
        style={{ textshadow: "2px 2px 5px red" }}
      >
        Student list
      </h3>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="dataTables_wrapper dt-bootstrap4 no-footer">
                <div class="row">
                  <div class="col-sm-12 col-md-12">
                    <div class="input-box">
                      <StudentAdd
                        addStudent={props.addStudent}
                        modal={modal}
                        setmodal={setmodal}
                      />
                      <input
                        id="myInput"
                        type="text"
                        placeholder="Search for name"
                        onkeyup="searchFun()"
                        style={{ right: "0%" }}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <table
                      className="table table-striped"
                      id="datatable-buttons"
                      class="table table-striped table-bordered dt-responsive nowrap"
                      aria-describedby="datable-buttons_info"
                    >
                      <thead>
                        <tr>
                          <th scope="col">Student ID</th>
                          <th scope="col">Student Name</th>
                          <th scope="col">Student email</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredStudents.length === 0
                          ? "No Students to display"
                          : filteredStudents.map((stud) => {
                              return (
                                <>
                                  <tr>
                                    <td>{stud.id}</td>
                                    <td>{stud.name}</td>
                                    <td>{stud.email}</td>
                                    <td>
                                      <button
                                        href=""
                                        className="btn btn-sm btn-danger delete btn-flat"
                                        onClick={() => onDelete(stud)}
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                      </tbody>
                    </table>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div
                        class="dataTables_info"
                        id="datatable-buttons_info"
                        role="status"
                        aria-live="public"
                      >
                        Showing entries
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="datatable-buttons_paginate"
                      >
                        <ul class="pagination">
                          <li
                            class="paginate_button page-item previous disabled"
                            id="datatable-buttons_previous"
                          >
                            <a for="#" tabindex="0" class="page-link">
                              Previous
                            </a>
                          </li>
                          <li class="paginate_button page-item active">
                            <a
                              for="#"
                              aria-controls="datatable-buttons"
                              data-dt-idx="!"
                              tabindex="0"
                              class="page-link"
                            >
                              1
                            </a>
                          </li>
                          <li
                            class="paginate_button page-item next disabled"
                            id="datatable-buttons_next"
                          >
                            <a
                              for="#"
                              aria-controls="datatable-buttons"
                              data-dt-idx="!"
                              tabindex="0"
                              class="page-link"
                            >
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
