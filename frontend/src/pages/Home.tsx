import { useSelector } from "react-redux";
import { RootState } from "./../store";
import { Todo, TodoState } from "./../reducers/todo";

const Home: React.FC = () => {

    const todos: Todo[] = useSelector((state: RootState) => (state.todoReducer as TodoState).todos);

    return (
        <div>
            <p>{JSON.stringify(todos)}</p>
        </div>
    );

}

export default Home;