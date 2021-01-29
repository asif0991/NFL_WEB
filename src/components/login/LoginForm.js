import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const LoginForm = () => {
    const classes = useStyles();

    const [year,setYear] = React.useState('');
    const [Mon,setMonth] = React.useState('');
    const [Day,setDay] = React.useState('');

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    const handleDayChange = (event) => {
        setDay(event.target.value);
    };
    const Login=()=>{
        alert("Logged in functionality in Progress");
    }
    const Captcha = () => {
        debugger;
        var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        var i;
        for (i = 0; i < 6; i++) {
            var a = alpha[Math.floor(Math.random() * alpha.length)];
            var b = alpha[Math.floor(Math.random() * alpha.length)];
            var c = alpha[Math.floor(Math.random() * alpha.length)];
            var d = alpha[Math.floor(Math.random() * alpha.length)];
            var e = alpha[Math.floor(Math.random() * alpha.length)];
            var f = alpha[Math.floor(Math.random() * alpha.length)];
            var g = alpha[Math.floor(Math.random() * alpha.length)];
        }
        var code = a + ' ' + b + '  ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
        document
            .getElementById("mainCaptcha")
            .value = code
    }
    return (

        <div className={classes.paper}>
            <span className="login-header">Log in to access your account</span>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Enter Email Address"
                            name="email"
                            autoComplete="email"/>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={year}
                                onChange={handleYearChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                inputProps={{
                                'aria-label': 'Without label'
                            }}>
                                <MenuItem value="">
                                    <em>Select Year</em>
                                </MenuItem>
                                <MenuItem value={10}>2021</MenuItem>
                                <MenuItem value={20}>2020</MenuItem>
                                <MenuItem value={30}>2019</MenuItem>
                            </Select>
                            <FormHelperText>Year</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={Mon}
                                onChange={handleMonthChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                inputProps={{
                                'aria-label': 'Without label'
                            }}>
                                <MenuItem value="">
                                    <em>Select Month</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                            <FormHelperText>Month</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={Day}
                                onChange={handleDayChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                inputProps={{
                                'aria-label': 'Without label'
                            }}>
                                <MenuItem value="">
                                    <em>Select Day</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                                <MenuItem value={13}>13</MenuItem>
                                <MenuItem value={14}>14</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                                <MenuItem value={16}>16</MenuItem>
                                <MenuItem value={17}>17</MenuItem>
                                <MenuItem value={18}>18</MenuItem>
                                <MenuItem value={19}>19</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={21}>21</MenuItem>
                                <MenuItem value={22}>22</MenuItem>
                                <MenuItem value={23}>23</MenuItem>
                                <MenuItem value={24}>24</MenuItem>
                                <MenuItem value={25}>25</MenuItem>
                                <MenuItem value={26}>26</MenuItem>
                                <MenuItem value={27}>27</MenuItem>
                                <MenuItem value={28}>28</MenuItem>
                                <MenuItem value={29}>29</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                                <MenuItem value={31}>31</MenuItem>
                                
                            </Select>
                            <FormHelperText>Day</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Enter Security Code"
                            name="code"/>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <div onLoad={Captcha()}>
                            <input type="text" id="mainCaptcha"/>
                            <Button
                                variant="contained"
                                color="primary"
                                id="refresh"
                                value="Refresh"
                                onClick={Captcha()}>
                                Primary
                            </Button>
                        </div>

                    </Grid> */}
                    <Grid item xs={12}>
                    <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    onClick={Login}
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    Log In
                </Button>
                <Grid container justify="flex-start">
                    <Grid item>
                        <Link href="#" variant="body2">
                            Register If you don't have an account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>

    );
}

export default LoginForm;

