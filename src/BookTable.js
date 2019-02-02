import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import 'date-fns';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import ReactDOM from 'react-dom';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class BookTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: '',
            date: '',
            time: ''
        };
    }
    handleChange = (e) => {        
        this.setState({
            [`${e.target.name}`]: e.target.value
        })
    }
    render() {
        // console.log(this.state.people);
        // console.log(this.state.date);
        // console.log(this.state.time);

        return (
            <div>
                <Dialog
                    open={this.props.bookTableDialogBox}
                    onClose={() => this.props.restaurantDataToBookTable()}
                >
                    <DialogTitle id="form-dialog-title">Book Table</DialogTitle>
                    {/* <MuiPickersUtilsProvider 
                    // utils={DateFnsUtils}
                    >
                        <Grid container  justify="space-around">
                            <DatePicker
                                margin="normal"
                                label="Date picker"
                                onChange={this.handleDateChange}
                            />
                            <TimePicker
                                margin="normal"
                                label="Time picker"
                                onChange={this.handleDateChange}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider> */}
                    <DialogContent>
                        {/* <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        /> */}
                    </DialogContent>
                        <form  autoComplete="off">
                            <FormControl >
                                <InputLabel htmlFor="age-simple">Age</InputLabel>
                                <Select
                                    inputProps={{
                                        name: 'people',
                                    }}
                                    onChange={(e) => this.handleChange(e)}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                </Select>
                            </FormControl>
                            <input onChange={(e) => this.handleChange(e)} type="date" required name="date" id="" />
                            <input onChange={(e) => this.handleChange(e)} type="time" required name="time" id="" />
                        </form>
                        <DialogActions>
                            <Button onClick={() => this.props.restaurantDataToBookTable()} color="primary">
                                Cancel
                        </Button>
                            <Button
                                color="primary"
                                onClick={() => {
                                    this.props.bookTable(this.state.people, this.state.date, this.state.time)
                                    this.props.restaurantDataToBookTable()
                                }}
                            >
                                Subscribe
                        </Button>
                        </DialogActions>
                </Dialog>
            </div>
                );
            }
        }
        export default BookTable
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
// const styles = {
//     grid: {
//         width: '60%',
//     },
// };

// class MaterialUIPickers extends React.Component {
//     state = {
//         // The first commit of Material-UI
//         selectedDate: new Date('2014-08-18T21:11:54'),
//     };

//     handleDateChange = date => {
//         this.setState({ selectedDate: date });
//     };

//     render() {
//         const { classes } = this.props;
//         const { selectedDate } = this.state;

//         return (

//     );
//     }
// }

