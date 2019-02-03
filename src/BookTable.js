import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
        console.log(e.target.value)
        this.setState({
            [`${e.target.name}`]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Dialog
                    open={this.props.bookTableDialogBox}
                    onClose={() => this.props.restaurantDataToBookTable()}
                    className='zomato-book-table-dialog-box'
                >
                    <DialogTitle id="form-dialog-title">Book A Table</DialogTitle>
                    <DialogContent>
                        <section>
                            <TextField
                                required
                                onChange={(e) => this.handleChange(e)}
                                id="date"
                                label="Date"
                                type="date"
                                name="date"
                                // defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                required
                                onChange={(e) => this.handleChange(e)}
                                label="Time"
                                type="time"
                                name="time"
                                // defaultValue="07:30"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300,
                                }}
                            />
                        </section>
                        <FormControl className='zomato-book-table-dialog-box-select' >
                            <InputLabel htmlFor="age-simple">Number of People</InputLabel>
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
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.restaurantDataToBookTable()} color="primary">
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            onClick={() => {
                                this.setState({people:''})
                                this.props.bookTable(this.state.people, this.state.date, this.state.time)
                                this.props.restaurantDataToBookTable()
                            }}
                        >
                            confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default BookTable