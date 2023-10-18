import React, {useState} from 'react';
function AddProduct() {
    const [productData, setProductData] = useState({
      name: '',
      price: '',
      description: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setProductData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(JSON.stringify(productData));
      console.log(productData);
    };
  
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={productData.name} onChange={handleInputChange} />
        </label>
    
        <label>
          Category:
          <input type="text" name="Category" value={productData.category} onChange={handleInputChange} />
        </label>
        <label>
          Quantity:
          <input type="number" name="Quantity" value={productData.quantity} onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={productData.price} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
  
  export default AddProduct;