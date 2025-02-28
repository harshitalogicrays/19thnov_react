import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const AddProduct = () => {
    const redirect = useNavigate()
    const categories = ["men's clothing","women's clothing","grocery","furniture","electronics"]
    let [product,setProduct] = useState({title:'',category:'',price:'',stock:'',image:'',brand:'',description:''})
    let [picLoading,setPicLoading] = useState(false)
    const handleImage =async(e)=>{
        const img = e.target.files[0]   
        const ext = ["image/jpeg" ,"image/png","image/gif","image/webp"]  
        if(img==undefined) {toast.error("please choose image")}
        else if(img.size > 1048576){toast.error("filesize exceeded")}
        else if(!ext.includes(img.type)){toast.error("invalid extension")}
        else {
            setPicLoading(true)
            const data = new FormData()
            data.append("file",img)
            data.append("cloud_name","harshitalra")
            data.append("upload_preset","19thnov")
            data.append("folder","19thnovimages")
            try{
                const res = await axios.post("https://api.cloudinary.com/v1_1/harshitalra/image/upload",data)
                // console.log(res.data.url)
                setProduct({...product,image:res.data.url})
                setPicLoading(false)
            }
            catch(err){toast.error(err.message);      setPicLoading(false)  }
        }
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
        await axios.post("https://67b69e6007ba6e5908412007.mockapi.io/products",product)
      
        toast.success("product added")
        redirect('/admin/view/product')
   }
   catch(err){toast.error(err.message)}
    }
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex  gap-4">
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}>
                <option value="" selected  disabled>Select a category</option>
                {categories.map((cat,index)=><option key={index}>{cat}</option>)}
              </select>
            </div>
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Product Title</label>
              <input
                type="text"
                className=" w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product name"   value={product.title} onChange={(e)=>setProduct({...product,title:e.target.value})}
              />
            </div>
          </div>
          <div className="flex  gap-4">
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price"   value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}
              />
            </div>
            <div className=" flex-1">
              <label className="block text-sm font-medium mb-2">Image</label>
              <input
                type="file" name="image"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL" onChange={handleImage}
              />
     
            </div></div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Stock</label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter stock quantity"    value={product.stock} onChange={(e)=>setProduct({...product,stock:e.target.value})}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Brand</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter brand"    value={product.brand} onChange={(e)=>setProduct({...product,brand:e.target.value})}
              />
            </div>

          </div>

          <div>
            <label className="block text-sm font-medium mb-2" >Description</label>
            <textarea
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"   value={product.description} onChange={(e)=>setProduct({...product,description:e.target.value})}></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {picLoading ? 
            <div class="animate-spin w-10 h-10 mx-auto border-4 border-t-transparent border-white rounded-full " ></div> : "Add Product" }
          </button>
        </form>
      </div>
  )
}

export default AddProduct
