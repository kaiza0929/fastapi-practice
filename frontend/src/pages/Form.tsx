import { useState, useEffect } from "react";
import { makeStyles, Box, FormControl, Input, FormHelperText, Button, Typography } from "@material-ui/core";
import { Todo } from "./../reducers/todo";

const useStyles = makeStyles({
    box: {
        width: "85%"
    }
});

const Form: React.FC = (props) => {

    alert(JSON.stringify(props))

    const classes = useStyles();

    const [state, setState] = useState<{id?: string, title: string, content: string, date: string}>({
        title: "", content: "", date: ""
    });
    
    /*
    useEffect(() => {
        if (props !== undefined) {
            let todo: Todo = props.location.state;
            setState({...todo, date: todo.date.getFullYear() + "/" + todo.date.getMonth() + "/" + todo.date.getDate()});
        }
    }, []);
    */
    

    return (
        <Box className={classes.box}>
            <FormControl>
                <Typography>タイトル</Typography>
                <Input value={state.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, title: e.currentTarget.value})}></Input>
                <FormHelperText>買い出しに出かける</FormHelperText>
                <Typography>詳細</Typography>
                <Input value={state.content} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, content: e.currentTarget.value})}></Input>
                <FormHelperText>人参・玉ねぎ・じゃがいも・カレーのルーを買う</FormHelperText>
                <Typography>期日</Typography>
                {/* 日付(時刻も?)のバリデーション */}
                <Input id="date" value={state.date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({...state, date: e.currentTarget.value})}></Input>
                <FormHelperText>2021/07/11</FormHelperText>
            </FormControl>
        </Box>
    );

}

export default Form;