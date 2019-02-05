import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class EditUserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
        };
    }
    handleChange = (e) => {
        this.setState({
            [`${e.target.name}`]: e.target.value
        })
    }
    render() {   
        return (
            <div>
                <Dialog
                    open={this.props.editUserDetails}
                    onClose={() => this.props.handleEditUserDetails()}
                >
                    <DialogTitle>Edit Details</DialogTitle>
                    <DialogContent>
                        <div>
                            <TextField
                                onChange={(e) => this.handleChange(e)}
                                label="Name"
                                type="text"
                                name="name"
                                defaultValue={this.props.userDetails.name}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                onChange={(e) => this.handleChange(e)}
                                label="Phone No."
                                type="text"
                                name="phone"
                                defaultValue={this.props.userDetails.phone}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.handleEditUserDetails()} color="primary">
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                        onClick={() => {
                            this.props.editUserDetailsFun(this.state.name, this.state.phone,this.props.userDetails.email)
                            this.props.handleEditUserDetails()
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
export default EditUserDetails