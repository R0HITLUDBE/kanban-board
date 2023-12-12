import React, { useState } from "react";
import { Button } from "../ui/button";
import { MenuIcon, PlusIcon } from "lucide-react";
import Task from "./Task";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dialog as Dialogs } from "@radix-ui/themes";
import { Label } from "@radix-ui/react-menubar";
import { TextField } from "@radix-ui/themes";
import { Input } from "../ui/input";

const Column = ({
  title,
  children,
  details,
  submitData,
  handleDrapDrop,
  handleDragOver,
}: any) => {
  const fields: any = [
    {
      name: "task",
    },
    {
      name: "description",
    },
  ];

  const [data, setData] = useState<any>({
    task: "",
    description: "",
  });
  return (
    <div
      onDrop={(e) => handleDrapDrop(e, title.toLowerCase())}
      onDragOver={handleDragOver}
      className="border w-[360px] h-[100%] py-8 px-4">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">{title}</p>
        <div>
          <Button disabled variant="ghost">
            <PlusIcon />
          </Button>
          <Button disabled variant="ghost">
            <MenuIcon />
          </Button>
        </div>
      </div>
      <div className="py-5 flex flex-col gap-5">{children}</div>
      {details.isInitial && (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"ghost"}
              className=" w-full border-2 border-dashed">
              <PlusIcon /> Add task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
              <DialogDescription>
                Complete your task details in the form and hit
                &apos;Submit&apos; when you&apos;re finished. Thanks!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {fields?.map((fi: any, index: any) => (
                <div
                  key={index}
                  className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right capitalize">{fi.name}</Label>
                  <Input
                    name={fi.name}
                    value={data?.[fi.name]}
                    onChange={(e) => {
                      setData((data: any) => ({
                        ...data,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                    className="col-span-3 focus:border-none focus:outline-none focus-visible:outline-none focus-visible:border-none"
                  />
                </div>
              ))}
            </div>
            <DialogFooter>
              <Dialogs.Close>
                <Button
                  onClick={() => {
                    const taskData: any = {
                      id: Math.random(),
                      title: data.task,
                      description: data.description,
                      date: new Date().getUTCDate(),
                      state: "todo",
                      message: [],
                    };
                    submitData(taskData);
                  }}
                  type="submit">
                  Save
                </Button>
              </Dialogs.Close>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Column;
