import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './UseAuth';

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {refetch, isPending , data: cart } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart, refetch, isPending]

};

export default useCart;