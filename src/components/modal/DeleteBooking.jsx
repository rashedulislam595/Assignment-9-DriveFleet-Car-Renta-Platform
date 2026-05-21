'use client'
import { deleteBooking } from '@/lib/data';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteBooking = ({car}) => {
    const {_id,carName} = car;
    

    const handleDelete =async()=>{
        const data = await deleteBooking(_id)
        if(data.deletedCount){
            toast.success("booking cancel successful!",{position:'top-center',theme:'dark'})
        }
        window.location.reload()
    }
    return (
        <div>
            <AlertDialog>
                <Button variant="outline" className='rounded-md text-danger border border-danger'>Delete</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-96">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{carName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} slot="close" variant="danger">
                                    Delete 
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteBooking;