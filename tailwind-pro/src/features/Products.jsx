import React, { useEffect, useState } from 'react'
import ProductsItems from './ProductsItems'
import useFetchApiData from '../useFetchApiData'
import { useDispatch, useSelector } from 'react-redux'
import { APPLY_FILTERS, selectBrands, selectCategories, selectFilters, selectPriceRange, selectSearch } from '../redux/filterSlice'
import { allproducts, selectProducts } from '../redux/productSlice'

const Products = () => {
  const dispatch = useDispatch()
  let {data} = useFetchApiData("https://67b69e6007ba6e5908412007.mockapi.io/products")
  useEffect(()=>{ dispatch(allproducts(data)) },[data])
  const products = useSelector(selectProducts)
    

  const searchval = useSelector(selectSearch);
  const filterProducts = useSelector(selectFilters);

  const categories = Array.from(new Set(products.map(item => item.category)));
  const brands = Array.from(new Set(products.map(item => item.brand)));

  const [selectedCategories, setSelectedCategories] = useState([]); 
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [price, setPrice] = useState([0, 10000]);

  // Update filter state
  useEffect(() => {
    dispatch(
      APPLY_FILTERS({
        products,
        search: searchval,
        category: selectedCategories,
        brands: selectedBrand,  
        priceRange: price
      })
    );
    
  }, [products, searchval, selectedCategories, selectedBrand, price]);

  const handleCategory = category => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };
  
  const handleBrand = brand => {
    setSelectedBrand(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  // const handlePriceChange = e => {
  //   setPrice([0, e.target.value]); // Assuming price filter is max price slider
  // };
  const handlePriceChange = (e, type) => {
    const value = Number(e.target.value);
    setPrice(prevPrice => 
      type === "min" 
        ? [value, prevPrice[1]] 
        : [prevPrice[0], value]
    );
  };
  

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrand([]);
    setPrice([0, 100000]);
  
    dispatch(
      APPLY_FILTERS({
        products,
        search: "",
        category: [],
        brands: [],
        priceRange: price,
      })
    );
  };
  
  return (
    <>
    {/* <div className='flex'>
      <div className='flex-1'>
          <div className="border-1 border-gray-600 mt-24 ms-5 p-3 rounded-lg">
            Categories <hr className='my-2'/>
            {categories.map((category,index)=>
              <div className="block mb-3" key={index}>
                   <label onClick={()=>handleCategory(category)}>{category}</label>
              </div>)}
          </div>
        
      </div>
      <div className="flex-3 mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
          {
            (searchval !='' || catval !='' ) ? <> 
              {filterProducts.length==0 ? <h1 className="text-2xl font-bold tracking-tight text-gray-900">No Product Found</h1> : <ProductsItems products={filterProducts}/>}
            
            </>: <ProductsItems products={products}/> 
          }
           
      </div>
    </div> */}

<div className="flex">
      {/* Filters */}
      <div className="flex-1">
        <div className="border-1 border-gray-600 mt-24 ms-5 p-3 rounded-lg">
          <h3>Categories</h3>
          <hr className="my-2" />
          {categories.map((category, index) => (
  <div key={index} className="mb-2">
    <input
      type="checkbox"
      checked={selectedCategories.includes(category)}
      onChange={() => handleCategory(category)}
    />
    <label className="ml-2">{category}</label>
  </div>
))}

          <h3>Brands</h3>
          <hr className="my-2" />
          {brands.map((brand, index) => (
            <div key={index} className="mb-2">
              <input
                type="checkbox"
                checked={selectedBrand.includes(brand)}
                onChange={() => handleBrand(brand)}
              />
              <label className="ml-2">{brand}</label>
            </div>
          ))}

          <h3>Price</h3>
          {/* <input
            type="range"
            min="0"
            max="10000"
            value={price[1]}
            onChange={handlePriceChange}
            className="w-full"
          />
          <p>Up to ₹{price[1]}</p> */}
          <h3>Price</h3>
<div className="flex items-center gap-4">
  <input
    type="number"
    min="0"
    max="10000"
    value={price[0]}
    onChange={(e) => handlePriceChange(e, "min")}
    className="w-20 p-1 border rounded"
  />
  <span>to</span>
  <input
    type="number"
    min="0"
    max="10000"
    value={price[1]}
    onChange={(e) => handlePriceChange(e, "max")}
    className="w-20 p-1 border rounded"
  />
</div>
    
          <hr className="my-2" />
        <button 
    onClick={resetFilters}
    className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
    Reset All
  </button>
      </div>    </div>

      {/* Products */}
      <div className="flex-3 mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
        {searchval || selectCategories.length>0 || selectedBrand.length > 0 || price[1] !== 10000 ? (
          filterProducts.length === 0 ? (
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              No Product Found
            </h1>
          ) : (
            <ProductsItems products={filterProducts} />
          )
        ) : (
          <ProductsItems products={products} />
        )}
      </div>
    </div>
    </>
  )
}

export default Products
