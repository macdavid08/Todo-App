import "./App.css";
import { nanoid } from "nanoid";
import { FormInput } from "./components/FormInput";
import { ListItems } from "./components/ListItems";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [formOutput, setFormOutput] = useState([]);
  const [isLoggedIn, setIsLoggedIn]= useState(false)

  

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formOutput')) || [];
    setFormOutput(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem('formOutput', JSON.stringify(formOutput));
  }, [formOutput]);



  const addItemHandler = (addInput) => {
    const newItem = {
      id: nanoid(),
      name: "new item",
      
    };
    setFormOutput((prevState) => {
      return [
        {
          value: addInput,
          id: newItem,
          done: false,
        },
        ...prevState,
      ];
    });
    

  };

  const deleteItemHandler = (id) => {
    const updatedOutput = formOutput.filter((item) => item.id !== id);
    setFormOutput(updatedOutput);

    localStorage.removeItem(formOutput)
    setIsLoggedIn(false)
  };

  const toggleDoneHandler = (id)=> {
    setFormOutput(prevState => {
      return(
        prevState.map((task)=>{
          if(task.id === id){
            return{...task, done:!task.done}
          }
          return task;
        })
      )
    })
  }

  return (
    <>
     <Card>
      <Header/>
     <FormInput addItem={addItemHandler}   />
      {formOutput.length === 0 ? (
        ""
      ) : (
        formOutput.map((data) => {
          return (
            <ListItems
              value={data.value}
              data={data}
              key={data.id}
              onDelete={() => {
                deleteItemHandler(data.id);
              }}
              toggle= {toggleDoneHandler}
            />
          );
        })
      )}
     </Card>
    </>
  );
}

export default App;
