import React from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Form, useNavigate, useParams } from '@remix-run/react'

export default function FormDialog({
  open,
  handleClose,
  // data,
  // onChange,
  // handleFormSubmit,
}) {
  //   const { id, name, email, phone, dob } = data

  return (
    <div>
       <Form method="post">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         Create new user
        </DialogTitle>
        <DialogContent>
         
            <Input
              id="Name"
              //   value={name}
              name="Name"
              // onChange={(e) => onChange(e)}
              placeholder="Enter name"
              label="Name"
              variant="outlined"
              margin="dense"
              fullWidth
            />
            <Input
              id="Type"
              //   value={email}
              type="Type"
              // onChange={(e) => onChange(e)}
              placeholder="Type"
              //   label="Email"
              //   variant="outlined"
              //   margin="dense"
              //   fullWidth
            />
            <Input
              id="Location"
              //
              location="Location"
              // onChange={(e) => onChange(e)}
              placeholder="Location"
              //   label="Phone Number"
              //   variant="outlined"
              //   margin="dense"
              //   fullWidth
            />

            <Input
              id="AdditionalParameter"
              //   value={dob}
              additionalParameter="AdditionalParameter"
              // onChange={(e) => onChange(e)}
              placeholder="AdditionalParameter"
              //   label="Date of Birth"
              //   variant="outlined"
              //   margin="dense"
              //   fullWidth
            />
            <Button onClick={handleClose} color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button
              color="primary"
              // onClick={() => handleFormSubmit()}
              type="submit"
              variant="contained"
            >
             Submit
            </Button>
         
        </DialogContent>
      </Dialog>
      </Form>
    </div>
  )
}
