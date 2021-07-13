import { useHistory } from "react-router-dom";
import { makeStyles, List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
    list: {
        flexDirection: "column",
        width: "10%"
    }
});

const Sidemenu: React.FC = () => {

    const history = useHistory();

    const classes = useStyles();
    
    return (
        <List className={classes.list}>
            <ListItem>
                <ListItemText primary="メニュー" />
            </ListItem>
            <ListItem button onClick={() => history.push("/")}>
                <ListItemText primary="Todo一覧" />
            </ListItem>
            <ListItem button onClick={() => history.push("/form")}>
                <ListItemText primary="Todoを追加" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="設定" />
            </ListItem>
        </List>
    )

}

export default Sidemenu;