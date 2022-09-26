import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList=()=>{

    const [products,setproducts]=useState([]);

    useEffect(()=>{
            getproduct();
    },[])

    const getproduct= async()=>{
        let result=await fetch('http://localhost:5000/products');
        result=await result.json();
        setproducts(result);

    }
   

    const deleteProduct=async(id)=>{
         let result=await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete"
         });
         result=result.json()
         if(result){
            getproduct();
         }
    }

    const searchHandle = async (event)=>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json()
            if(result){
                setproducts(result)
            }
        }else{
            getproduct();
        }
        
    }
    return (
        <div className="product-list">
            <h3>Product List</h3>
            <input type="" className='search-product-box' placeholder='Search Product'
            onChange={searchHandle}
             />
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item,index)=>
                    <ul key={item._id}>
                        <li>{index+1}</li>
                        <li>{item.name}</li>
                        <li>${item.price}</li>
                        <li>{item.category}</li>
                        <li>
                            <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/"+item._id}>Update</Link>
                            </li>
                    </ul>
                )
            }
        </div>
    )
}
 export default ProductList;





