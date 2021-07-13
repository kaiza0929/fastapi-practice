import { useSelector } from "react-redux";
import { RootState } from "./../store";
import { useHistory } from "react-router-dom";
import { Todo, TodoState } from "./../reducers/todo";
import { makeStyles, Box, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

const useStyles = makeStyles({
    box: {
        width: "85%"
    },
});

const Home: React.FC = () => {

    const classes = useStyles();

    const todos: Todo[] = useSelector((state: RootState) => (state.todoReducer as TodoState).todos);

    const history = useHistory();

    return (
        <Box className={classes.box}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>タイトル</TableCell>
                        <TableCell>詳細</TableCell>
                        <TableCell>期日</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map((todo: Todo) => {
                        return (
                            <TableRow hover key={todo.id} onClick={() => history.push("/form", todo)}>
                                <TableCell>{todo.title}</TableCell>
                                <TableCell>{todo.content}</TableCell>
                                <TableCell>{todo.date.getFullYear() + "/" + todo.date.getMonth() + "/" + todo.date.getDate()}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Box>
    );

}

export default Home;