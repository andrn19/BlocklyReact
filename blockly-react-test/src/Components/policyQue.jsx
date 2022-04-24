import React from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import List from "./data";

const PolicyQue = () => {

    const onDragEnd = (param) => {
        const srcI = param.source.index;
        const desI = param.destination.index;
        if (desI != null) {
            list.splice(desI, 0, list.splice(srcI, 1)[0]);
            List.saveList(list);
        }
    };

    const list = List.getList();

    const stateStyle = (state) => {
        if(state === "Done") {
            return { color: "lightgreen" }
        }
        if(state === "Currently") {
            return { color: "lightblue" }
        }
        if(state === "Rejected") {
            return { color: "red" }
        }
        else {
            return { color: "white" }
        }
    }

    return (
        <div className="queDiv">
            <center><h2>Tasks</h2></center>
            <DragDropContext
                onDragEnd={onDragEnd}>
                <ul className="queList">
                    <Droppable droppableId="droppable-1">
                        {(provided, _) => (
                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                {list.map((item, i) => (
                                    <Draggable key={item.table}
                                        draggableId={'draggable-' + item.table}
                                        index={i}>
                                        {(provided, snapshot) => (
                                            <p className="queListItem"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                Table {item.table}: <span style={stateStyle(item.tableStatus)}>{item.tableStatus} {item.policy}</span><br />
                                                Last cleaned {item.lastClean}
                                            </p>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </ul>
            </DragDropContext>
        </div>
    );
}

export default PolicyQue