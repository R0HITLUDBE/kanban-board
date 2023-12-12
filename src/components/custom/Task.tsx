import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@radix-ui/themes";

const Task = ({ cardDetails }: any) => {
  const handleDrag = (e: React.DragEvent, widgetData: string) => {
    e.dataTransfer.setData("widget", widgetData);
  };
  return (
    <Card
      draggable
      onDragStart={(e) => {
        handleDrag(e, JSON.stringify(cardDetails));
      }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex justify-between">
          <p>{cardDetails?.title}</p>
          <Badge
            className="p-1 h-min oldstyle-nums"
            size={"2"}
            color={"cyan"}
            highContrast>
            <p className="text-xs">{cardDetails?.state}</p>
          </Badge>
        </CardTitle>
        <CardDescription className="text-sm"></CardDescription>
      </CardHeader>
      <CardContent className="text-xs text-gray-600">
        {cardDetails?.description}
      </CardContent>
      <CardFooter>
        <Badge
          className="oldstyle-nums p-1"
          size={"2"}
          color={"lime"}
          highContrast>
          <p className="text-xs">{cardDetails?.date}</p>
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default Task;
