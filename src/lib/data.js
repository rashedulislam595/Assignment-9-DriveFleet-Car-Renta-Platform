// all cars data
export const getAllCars =async()=>{
    const res = await fetch('http://localhost:5000/cars')
    const data = await res.json()
    return data
}

// getCarById
export const getCarById = async(id)=>{
    const res = await fetch(`http://localhost:5000/cars/${id}`);
    const data = await res.json();
    return data
}