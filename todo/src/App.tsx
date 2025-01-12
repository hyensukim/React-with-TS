import { useState } from 'react';
import styled from '@emotion/styled';
import { DataView } from 'components/DataView';
import { InputContainer } from 'components/InputContainer';
import { ToDoListContextProvider } from 'contexts/ToDoList';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {

  const [toDoList, setToDoList] = useState(["리액트 공부"
  ,"독서하기","개발하기", "자소서 작성하기"]);

  const onDelete = (todo:string) => {
    setToDoList(toDoList.filter(item => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };

  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <InputContainer/>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
