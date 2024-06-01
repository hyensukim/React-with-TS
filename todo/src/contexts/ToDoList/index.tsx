import { createContext, useState } from 'react';

interface Context{
    readonly toDoList: string[];
    readonly onAdd: (toDo: string) => void;
    readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
    toDoList: [],
    /* eslint-disable @typescript-eslint/no-empty-function */
    onAdd: (): void => {},
    onDelete: (): void => {},
    /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props{
    children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({ children }: Props)=>{
    const[toDoList, setToDOList] = useState([
        '리엑트 공부하기',
        '운동하기',
        '책 읽기',
    ]);

    const onDelete = (toDo: string) => {
        setToDOList(toDoList.filter((item)=>item !== toDo));
    };

    const onAdd = (toDo: string) => {
        setToDOList([...toDoList, toDo]);
    };

    return(
        <ToDoListContext.Provider
            value={{
                toDoList,
                onAdd,
                onDelete,
            }}>
                {children}
            </ToDoListContext.Provider>
    );
};

export { ToDoListContext, ToDoListContextProvider };