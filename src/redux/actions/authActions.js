import axios from 'axios';
import { toast } from 'react-toastify';

export const login = async (formData) => {
    try {
        const res = await axios.post('https://api.transfi.net/api/login', formData);

        if (res.data?.success === true) {
            toast.success(res.data?.message);
            localStorage.setItem('user', JSON.stringify(res.data.data?.user));
            localStorage.setItem('token', res.data.data?.token)
        }else{
            toast.error(res.data?.message)
        }
    } catch (err) {
        console.log(err.message);
    }
}

export const register = async (formData) => {
    try {
        const res = await axios.post('https://api.transfi.net/api/register', formData);

        if (res.data?.success === true ) {
           toast.success(res.data?.message);
            localStorage.setItem('user', JSON.stringify(res.data.data?.user));
            localStorage.setItem('token', res.data.data?.token)
        } else{
            toast.error(res.data?.message)
        }
    } catch (err) {
       toast.error('Signup unsuccessful')
    }
}

export const recoverPassword = async (email) => {

    const data = {
        email
    }

    try{
        const res = await axios.post('https://api.transfi.net/api/forgot-password', data);
        
      if (res?.data) {
            toast.success(res.data?.message)
        }else{
            toast.error(res.data?.message)
        }

    } catch (err) {
        console.log(err.message);
    }
}