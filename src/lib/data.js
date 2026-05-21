
// post add car 
export const postAddCar = async (carData) => {
    const res = await fetch('http://localhost:5000/cars', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(carData)
    })
    const data = await res.json()
    return data
}

// all cars data
export const getAllCars = async () => {
    const res = await fetch('http://localhost:5000/cars')
    const data = await res.json()
    return data
}

// getCarById
export const getCarById = async (id) => {
    const res = await fetch(`http://localhost:5000/cars/${id}`);
    const data = await res.json();
    return data
}

// get specific user add cars data 
export const getUserCarData = async (userId) => {
    const res = await fetch(`http://localhost:5000/cars/user/${userId}`);
    const data = await res.json();
    return data
}

// update car data 
export const updateCarData = async (id, updateData) => {
    const res = await fetch(`http://localhost:5000/cars/${id}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateData)
    })
    const data = await res.json();
    return data
}

// Delete car data
export const deleteCarInfo = async(id)=>{
    const res = await fetch(`http://localhost:5000/cars/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    return data
}

// booking 
// post booking data from server
export const postCarBooking = async (bookingData) => {
    const res = await fetch('http://localhost:5000/carBookings', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    });
    const data = await res.json()
    return data
}

// ger specific booking data
export const getUserBookings = async (userId) => {
    const res = await fetch(`http://localhost:5000/carBookings/${userId}`);
    const data = await res.json();
    return data
}

// delete booking
export const deleteBooking = async (id) => {
    const res = await fetch(`http://localhost:5000/carBookings/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    return data
}