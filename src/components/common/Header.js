import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import TabContext from "@material-ui/lab/TabContext";
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Login from '../login/Login';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    }
}));

const Header = () => {
    const classes = useStyles();
    const [value,
        setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar id="header" position="relative">
                <Toolbar>

                    <Typography variant="h6" color="inherit" noWrap>
                        
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.root}>
                <TabContext value={value}>
                    <AppBar id="subheader" position="static">
                        <TabList onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Registration" value="2"/>
                            <Tab label="Login" value="1"/>
                        </TabList>
                    </AppBar>
                    <TabPanel value="2">Registration</TabPanel>
                    <TabPanel value="1">
                        <Login/>
                    </TabPanel>
                </TabContext>
            </div>
        </React.Fragment>
    )
}

export default Header;
