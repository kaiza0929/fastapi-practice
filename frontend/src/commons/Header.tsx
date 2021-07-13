import { makeStyles, AppBar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    appBar: {
        background: "teal",
        padding: "1%"
    },
    title: {
        flexGrow: 1,
        fontWeight: "bold"
    }
})

const Header: React.FC = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Typography variant="h6" className={classes.title}>React App</Typography>
        </AppBar>
    )
}

export default Header;