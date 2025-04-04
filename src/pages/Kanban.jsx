

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { Header } from '../components';
import { kanbanData, kanbanGrid } from '../data/dummy';

const Kanban = () => {
  const [tasks, setTasks] = useState(kanbanData);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.Status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);
    setTasks(updatedTasks);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 overflow-auto">
          {kanbanGrid.map((col) => (
            <Droppable key={col.keyField} droppableId={col.keyField}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-100 p-4 rounded-lg w-72 min-h-[400px]"
                >
                  <h2 className="text-lg font-bold mb-4">{col.headerText}</h2>
                  {tasks
                    .filter((task) => task.Status === col.keyField)
                    .map((task, index) => (
                      <Draggable key={task.Id} draggableId={String(task.Id)} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-3 mb-2 bg-white rounded-lg shadow-md"
                          >
                            <h3 className="text-sm font-semibold">{task.Summary}</h3>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;
