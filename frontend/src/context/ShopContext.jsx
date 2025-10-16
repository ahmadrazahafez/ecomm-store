import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/assets"

export const ShopContext = createContext()

const ShopContextprovider = (props) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const currency = "$";
    const delivery_fee = 10
    const [search, setsearch] = useState("")
    const [showsearch, setshowsearch] = useState(false)
    const [cartitem, setcartitem] = useState([])
    const [productss, setproductss] = useState([])

    const addtocart = async (itemid, size) => {
        if (!size) {
            toast.warn("Please select a size before adding to cart");
            return;
        }
        let cartdata = structuredClone(cartitem)
        if (cartdata[itemid]) {
            if (cartdata[itemid][size]) {
                cartdata[itemid][size] += 1
            } else {
                cartdata[itemid][size] = 1

            }

        } else {
            cartdata[itemid] = {}
            cartdata[itemid][size] = 1
        }
        setcartitem(cartdata)

        if (token) {
            const res = await fetch("https://ecomm-backend-chi.vercel.app/api/cart/add", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    token: token
                },
                body: JSON.stringify({ itemid, size })
            })
            const ress = await res.json()
            if (ress.success === true) {
                toast.success(ress.message)
            } else {
                toast.error(ress.message)
            }
        }
    }

    const getcartitem = () => {
        let totalcount = 0

        for (let items in cartitem) {
            for (let item in cartitem[items]) {

                try {
                    if (cartitem[item][items] > 0) {
                        totalcount += cartitem[item][items]
                    }
                } catch (err) {

                }
            }
        }
        return totalcount
    }


    const updatequantity = async (itemid, size, quantity) => {
        const tempdata = structuredClone(cartitem)
        tempdata[itemid][size] = quantity
        setcartitem(tempdata)
        if (token) {
            const res = await fetch("https://ecomm-backend-chi.vercel.app/api/cart/remove", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    token: token
                },
                body: JSON.stringify({ itemid, size })
            });

            const data = await res.json();
            if (data.success) {
                toast.success("Item removed from cart");
            } else {
                toast.error(data.message);
            }
        }
    }



    const carttotal = () => {
        let totalamount = 0
        for (let items in cartitem) {
            const totalinfo = productss.find((item) => String(item._id) === String(items))
            for (let item in cartitem[items]) {

                if (cartitem[items][item] > 0) {
                    if (totalinfo) {
                        totalamount += totalinfo.price * cartitem[items][item]
                    }
                }



            }

        }
        return totalamount;
    }

    const getusercart = async () => {
        if (token) {
            const res = await fetch("https://ecomm-backend-chi.vercel.app/api/cart/get", {
                method: "POST",
                headers: {
                    "Content-type": "application/jaon",
                    token: token
                },
            })
            const data = await res.json()
            if (data.success === true) {
                setcartitem(data.cartdata)
            } else {
                alert(data.message)
            }
        }
    }

    const getdata = async () => {

        const res = await fetch("https://ecomm-backend-chi.vercel.app/api/product/get", {
            method: "GET"
        })
        const dataaa = await res.json()
        if (dataaa.success === true) {
            setproductss(dataaa.dataa)
        }

    }

    useEffect(() => {
        getdata()
    }, [])

    useEffect(() => {
        if (token) {

            getusercart()
        }
    }, [token])




    const value = {
        productss, currency, delivery_fee,
        search, setsearch, showsearch, setshowsearch, cartitem, setcartitem, addtocart, updatequantity, navigate,
        carttotal,
    }



    return (
        <ShopContext.Provider value={value}>

            {props.children}
        </ShopContext.Provider>


    )
}


export default ShopContextprovider
