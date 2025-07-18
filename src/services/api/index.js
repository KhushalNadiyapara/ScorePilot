import axiosInstance from "./httprequest";

export const getData = (data)=>{
    const url = '/api/getall'
    return axiosInstance({ method: 'GET', url });
}

export const deleteData= (id)=>{
    const url = `/api/delete/${id}`
    return axiosInstance({ method: 'DELETE', url });
}

export const addData = (data)=>{
    const url = '/api/create'
    return axiosInstance({ method: 'POST', url, data });
}

export const getSingleData = (id)=>{
    const url = `/api/getOne/${id}`
    return axiosInstance({ method: 'GET', url });
}
export const updateData = (id, data)=>{
    const url = `/api/update/${id}`
    return axiosInstance({ method: 'PUT', url, data });
}