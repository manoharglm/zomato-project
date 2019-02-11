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
import { connect } from "react-redux";

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
    bookTableDialogBox =  () =>{
        this.props.bookTable(this.state.people, this.state.date, this.state.time)
        this.props.openBookTableDialogBox()
        this.setState({people:''})
    }
    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.openBookTableDialogBox}
                    className='zomato-book-table-dialog-box'
                >
                    <DialogTitle id="form-dialog-title">Book A Table</DialogTitle>
                    <DialogContent>
                        <div className='zomato-book-table-form'>
                            <TextField
                                onChange={(e) => this.handleChange(e)}
                                id="date"
                                label="Date"
                                type="date"
                                name="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                onChange={(e) => this.handleChange(e)}
                                label="Time"
                                type="time"
                                name="time"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300,
                                }}
                            />
                        </div>
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
                        <Button onClick={this.props.openBookTableDialogBox} color="primary">
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            onClick={this.bookTableDialogBox}
                        >
                            confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      open: state.open,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openBookTableDialogBox: () => dispatch({ type: "HANDLE_BOOK_TABLE"}),
    };
};
export default connect(mapStateToProps, mapDispatchToProps) (BookTable);