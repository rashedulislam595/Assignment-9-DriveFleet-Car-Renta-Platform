
// post add car 
export const postAddCar = async (carData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`, {
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
export const getAllCars = async (search,type) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars?search=${search}&type=${type}`)
    const data = await res.json()
    return data
}

// available 6 cars
export const getAvailableCars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/availableCars`)
    const data = await res.json()
    return data
}

// getCarById
export const getCarById = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data
}

// get specific user add cars data 
export const getUserCarData = async (userId,token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/user/${userId}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data
}

// update car data 
export const updateCarData = async (id, updateData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`, {
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
export const deleteCarInfo = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    return data
}

// booking 
// post booking data from server
export const postCarBooking = async (bookingData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/carBookings`, {
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
export const getUserBookings = async (userId,token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/carBookings/${userId}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data
}

// delete booking
export const deleteBooking = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/carBookings/${id}`, {
        method: "DELETE"
    })
    const data = await res.json()
    return data
}