"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [disc, setdisc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, disc }]);
    settitle("");
    setdisc("");
    console.log(mainTask);
    const DeleteHandler = (i) => {
      let copyTask = [...mainTask];
      copyTask.splice(i, 1);
      setmainTask(copyTask);
    };
  };
  let renderTask = <h2> Number of task Avliable</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.disc}</h6>
          </div>
          <button
            onClick={() => {
              DeleteHandler(i);
            }}
            className="bg-red-500 text-white rounded font-bold px-4 py-2:"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-center font-bold text-5xl">
        My To-do app
      </h1>

      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="text-2xl  bordor-zinc-600 bordor-4 px-4 py-2 m-8 p-10 "
          placeholder="Enter your task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl bordor-zinc-600 bordor-4  px-4 py-2 m-8 p-10 "
          placeholder="Enter your Discription"
          value={disc}
          onChange={(e) => {
            setdisc(e.target.value);
          }}
        />

        <button className="bg-green-600 text-white px-4 py-2 text-2xl font-bold m-5 rounded-lg">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
