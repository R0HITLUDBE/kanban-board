"use client";
import { TextField } from "@radix-ui/themes";
import { FormInput, MenuIcon, PlusIcon, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Task from "./Task";
import Column from "./Column";

const KanbanBoard = () => {
  const [completed, setCompleted] = useState<any[]>([
    {
      id: "23232",
      title: "title",
      description:
        "acacvacv afafceafaf  fafafaf af aef af af af af afafasf a fae",
      date: "June 23, 2020",
      state: "todo",
      message: [],
    },
    {
      id: "23232",
      title: "title 1",
      description:
        "acacvacv afafceafaf  fafafaf af aef af af af af afafasf a fae",
      date: "June 2223, 2020",
      state: "in progress",
      message: [],
    },
  ]);
  const [incompleted, setInCompleted] = useState<any[]>([]);
  const [stages, setStages] = useState<any>([
    { id: 1, name: "todo", isInitial: true },
    { id: 2, name: "blocked", isInitial: false },
    { id: 3, name: "in progress", isInitial: false },
    { id: 4, name: "done", isInitial: false },
  ]);
  const [tasks, setTasks] = useState<any>({
    todo: [],
    blocked: [],
    "in progress": [],
    done: [],
  });

  const submitData = (data: any) => {
    setTasks((prevTask: any) => ({
      ...prevTask,
      todo: [...prevTask.todo, data],
    }));
  };

  const handleDrapDrop = (e: React.DragEvent, stage: any) => {
    const widget = e.dataTransfer.getData("widget") as string;
    const task = JSON.parse(widget);
    const newData = tasks[task.state].filter((findTask: any) => {
      if (findTask.id !== task.id) {
        return findTask;
      }
    });

    const taskDataaa = tasks[stage].filter((findTask: any) => {
      if (findTask.id !== task.id) {
        return findTask;
      }
    });
    taskDataaa.push({ ...task, state: stage });

    setTasks((prevTasks: any) => ({
      ...prevTasks,
      [task.state]: newData,
      [stage]: taskDataaa,
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-full w-full">
      <div className="h-[10%] py-10 px-8 border">
        <div className="flex justify-between w-[60%]">
          <p className="text-3xl">Tasks</p>
        </div>
      </div>
      <div className="w-full md:p-10 flex flex-col  md:flex-row items-center md:items-start gap-10">
        {stages.map((stage: any) => (
          <Column
            key={stage.id}
            title={stage.name}
            details={stage}
            submitData={submitData}
            handleDrapDrop={handleDrapDrop}
            handleDragOver={handleDragOver}>
            {tasks?.[stage?.name]?.map((item: any) => (
              <Task key="acf" cardDetails={item} />
            ))}
          </Column>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
