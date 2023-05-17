import React from 'react';

const AddEvents = () => {
    const handleAddEvents = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const events = {
            name, date, description, photo
        }
        console.log(events)
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(events)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset()
            })
    }
    return (
        <div>
            <h1>Add events</h1>
            <div className='border w-2/3 mx-auto py-10'>
                <form onSubmit={handleAddEvents}>
                    <div className='flex justify-around'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Event Title</span>
                            </label>
                            <input type="text" placeholder="event title" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Event Date</span>
                            </label>
                            <input type="date" placeholder=" " name='date' className="input input-bordered" />
                        </div>
                    </div>
                    <div className='flex justify-around my-10'>
                        <div>
                            <label className="label">
                                <span className="label-text text-center">Description</span>
                            </label>
                            <textarea name="description" className='border p-2' id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-center">Upload Image</span>
                            </label>
                            <input type="url" name="photo" id="" className='border p-2' />
                        </div>
                    </div>
                    <input type="submit" value="Submit" className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
};

export default AddEvents;