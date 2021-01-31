import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Grid,
    Box,
    Paper,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    FormLabel,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
    Button

} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

const Registration = () => {
    const classes = useStyles();
    const [post,
        setPost] = React.useState('');
    const [category,
        setCategory] = React.useState('');

    const handlePostChange = (event) => {
        setPost(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const [exService,
        setexService] = React.useState('');
    const [isEmployee,
        setisEmployee] = React.useState(false);
    const [isJnK,
        setisJnK] = React.useState('Choose wisely');
    const [gender,
        setGender] = React.useState('');

    const [isDisable,
        setisDisable] = React.useState('');

    const handleexServiceChange = (event) => {
        setexService(event.target.value);
    };
    const handleisEmployeeChange = (event) => {
        setisEmployee(event.target.value);
    };
    const handleisJnKChange = (event) => {
        setisJnK(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleDisableChange = (event) => {
        setisDisable(event.target.value);
    };

    return (
        <React.Fragment>

            <Grid item xs={12} className="regPagePadding">
                <Paper className={classes.paper}>
                    <Box>
                        <h2
                            style={{
                            color: "#457096",
                            textAlign: "center"
                        }}>Registration</h2>

                    </Box>
                    <Box border={1}>
                        <h2
                            style={{
                            textAlign: "left",
                            marginLeft: "1rem",
                            color: "black"
                        }}>Applying Post Details
                        </h2>
                        <Divider/>
                        <br/>
                        <br/>

                        <div>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>

                                    <Grid item xs={5} className="leftAlign">
                                        <FormControl
                                            className={classes.formControl}
                                            style={{
                                            width: "15rem",
                                            fontWeight: "500",
                                            fontSize: "1rem",
                                            color: "black"
                                        }}>
                                            <InputLabel
                                                id="demo-simple-select-label-grey"
                                                style={{
                                                color: "black",
                                                fontSize: "1rem",
                                                fontWeight: "500",
                                                marginTop: "-1rem"
                                            }}>Apply for the Post<span
                                                style={{
            color: "red",
            marginLeft: "5px"
        }}>*</span>
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                variant="standard"
                                                value={post}
                                                onChange={handlePostChange}>

                                                <MenuItem value={10}>MT (CIVIL)</MenuItem>
                                                <MenuItem value={20}>MT (CHEMICAL)</MenuItem>
                                                <MenuItem value={30}>MT (CHEMICAL LAB)</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={5} className="leftAlign">
                                        <FormControl
                                            className={classes.formControl}
                                            style={{
                                            width: "15rem",
                                            fontWeight: "500",
                                            fontSize: "1rem",
                                            color: "black"
                                        }}>
                                            <InputLabel
                                                id="demo-simple-select-label"
                                                style={{
                                                color: "black",
                                                fontSize: "1rem",
                                                fontWeight: "500",
                                                marginTop: "-1rem"
                                            }}>
                                                Category
                                                <span
                                                    style={{
                                                    color: "red",
                                                    marginLeft: "5px"
                                                }}>*</span>
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                variant="standard"
                                                value={category}
                                                onChange={handleCategoryChange}>

                                                <MenuItem value={10}>General</MenuItem>
                                                <MenuItem value={20}>OBC (Non Creamy Layer)</MenuItem>
                                                <MenuItem value={30}>SC</MenuItem>
                                                <MenuItem value={30}>ST</MenuItem>
                                                <MenuItem value={30}>EWS</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} className="leftAlign">
                                        <FormControl
                                            component="fieldset"
                                            error={"error"}
                                            className={classes.formControl}>
                                            <FormLabel component="legend">Are You an Ex-Serviceman?<span
                                                style={{
            color: "red",
            marginLeft: "5px"
        }}>*</span>
                                            </FormLabel>
                                            <RadioGroup
                                                aria-label="quiz"
                                                name="quiz"
                                                value={exService}
                                                onChange={handleexServiceChange}>
                                                <FormControlLabel value="Yes" control={< Radio />} label="Yes"/>
                                                <FormControlLabel value="No" control={< Radio />} label="No"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} className="leftAlign">
                                        <FormControl
                                            component="fieldset"
                                            error={"error"}
                                            className={classes.formControl}>
                                            <FormLabel component="legend">Are You Departmental Candidate(NFL Employee)<span
                                                style={{
            color: "red",
            marginLeft: "5px"
        }}>*</span>
                                            </FormLabel>
                                            <RadioGroup
                                                aria-label="quiz"
                                                name="quiz"
                                                value={isEmployee}
                                                onChange={handleisEmployeeChange}>
                                                <FormControlLabel value="Yes" control={< Radio />} label="Yes"/>
                                                <FormControlLabel value="No" control={< Radio />} label="No"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} className="leftAlign">
                                        <FormControl
                                            component="fieldset"
                                            error={"error"}
                                            className={classes.formControl}>
                                            <FormLabel component="legend">Are You been ordinarily domiciled in the state of
                                                Jammu & Kashmir from 01.01.1980 to 31.12.1989.
                                                <span
                                                    style={{
                                                    color: "red",
                                                    marginLeft: "5px"
                                                }}>*</span>
                                            </FormLabel>
                                            <RadioGroup
                                                aria-label="quiz"
                                                name="quiz"
                                                value={isJnK}
                                                onChange={handleisJnKChange}>
                                                <FormControlLabel value="Yes" control={< Radio />} label="Yes"/>
                                                <FormControlLabel value="No" control={< Radio />} label="No"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                        <div>
                            <h2
                                style={{
                                textAlign: "left",
                                marginLeft: "1rem",
                                color: "black"
                            }}>Personal Details
                            </h2>
                            <Divider/>
                        </div>
                        <br/>
                        <div>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>

                                    <Grid item xs={3} className="leftAlign">

                                        <TextField
                                            id="standard-password-input"
                                            label="Enter First Name"
                                            type="text"
                                            className="placeholder"
                                            autoComplete="current-password"/>

                                    </Grid>
                                    <Grid item xs={3} className="leftAlign">

                                        <TextField
                                            id="standard-password-input"
                                            label="Enter Middle Name"
                                            type="text"
                                            className="placeholder"
                                            autoComplete="current-password"/>

                                    </Grid>
                                    <Grid item xs={3} className="leftAlign">

                                        <TextField
                                            id="standard-password-input"
                                            label="Enter Last Name"
                                            type="text"
                                            className="placeholder"
                                            autoComplete="current-password"/>

                                    </Grid>

                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                        <div>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>

                                    <Grid item xs={3} className="leftAlign">

                                        <TextField
                                            id="standard-password-input"
                                            label="Enter Father's Full Name"
                                            type="text"
                                            className="placeholder"
                                            autoComplete="current-password"/>

                                    </Grid>

                                    <Grid item xs={3} className="leftAlign">

                                        <TextField
                                            id="standard-password-input"
                                            label="Enter Mother's Full Name"
                                            type="text"
                                            className="placeholder"
                                            autoComplete="current-password"/>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                        <div>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>

                                    <Grid item xs={3} className="leftAlign">

                                        <TextField
                                            id="standard-password-input"
                                            label="Enter email"
                                            type="text"
                                            className="placeholder"
                                            autoComplete="current-password"/>

                                    </Grid>

                                    <Grid item xs={3} className="leftAlign">

                                        <TextField
                                            id="standard-password-input"
                                            label="Confirm Email Address"
                                            type="text"
                                            className="placeholder"
                                            autoComplete="current-password"/>

                                    </Grid>
                                    <Grid item xs={3} className="leftAlign">

                                        <TextField
                                            id="standard-password-input"
                                            label="Enter Phone Number"
                                            type="text"
                                            className="placeholder"
                                            autoComplete="current-password"/>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                        <div>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>

                                    <Grid item xs={3} className="leftAlign">
                                        <FormControl
                                            component="fieldset"
                                            error={"error"}
                                            className={classes.formControl}>
                                            <FormLabel component="legend">Gender
                                                <span
                                                    style={{
                                                    color: "red",
                                                    marginLeft: "5px"
                                                }}>*</span>
                                            </FormLabel>
                                            <RadioGroup
                                                aria-label="quiz"
                                                name="quiz"
                                                value={gender}
                                                onChange={handleGenderChange}>
                                                <FormControlLabel value="Yes" control={< Radio />} label="Male"/>
                                                <FormControlLabel value="No" control={< Radio />} label="Female"/>
                                                <FormControlLabel value="Others" control={< Radio />} label="Others"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3} className="leftAlign">
                                        <FormControl
                                            component="fieldset"
                                            error={"error"}
                                            className={classes.formControl}>
                                            <FormLabel component="legend">Any Disability?
                                                <span
                                                    style={{
                                                    color: "red",
                                                    marginLeft: "5px"
                                                }}>*</span>
                                            </FormLabel>
                                            <RadioGroup
                                                aria-label="quiz"
                                                name="quiz"
                                                value={isDisable}
                                                onChange={handleDisableChange}>
                                                <FormControlLabel value="Yes" control={< Radio />} label="Yes"/>
                                                <FormControlLabel value="No" control={< Radio />} label="No"/>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                        <div>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={3} className="leftAlign">
                                        <FormControl
                                            className={classes.formControl}
                                            style={{
                                            width: "15rem",
                                            fontWeight: "500",
                                            fontSize: "1rem",
                                            color: "black"
                                        }}>
                                            <InputLabel
                                                id="demo-simple-select-label-grey"
                                                style={{
                                                color: "black",
                                                fontSize: "1rem",
                                                fontWeight: "500",
                                                marginTop: "-1rem"
                                            }}>Marital Status<span
                                                style={{
            color: "red",
            marginLeft: "5px"
        }}>*</span>
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                variant="standard"
                                                value={post}
                                                onChange={handlePostChange}>

                                                <MenuItem value={10}>Single</MenuItem>
                                                <MenuItem value={20}>Married</MenuItem>
                                                <MenuItem value={30}>Divorced</MenuItem>
                                                <MenuItem value={30}>Widowed</MenuItem>
                                                <MenuItem value={30}>Separated</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={3} className="leftAlign">

                                        <TextField
                                            id="standard-password-input"
                                            label="Enter Aadhaar Number"
                                            type="text"
                                            className="placeholder"
                                            autoComplete="current-password"/>

                                    </Grid>

                                </Grid>
                            </Grid>
                        </div>
                        <br/>

                        <div>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={12} className="leftAlign">
                                        <div class="g-recaptcha" data-sitekey="your_site_key"></div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                        <div>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={12} className="leftAlign">
                                        <Button variant="contained" color="primary">
                                            Register
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                        <br/>
                    </Box>

                </Paper>
            </Grid>
        </React.Fragment>
    );
}

export default Registration;