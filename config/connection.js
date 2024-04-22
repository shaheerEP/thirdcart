const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/shopping'; // Replace with your connection string
const Product = mongoose.model('Product');
mongoose.connect(connectionString, {
 
})
.then()
.catch(error => console.error('Error connecting to MongoDB:', error));

const deleteProduct = async (prodId) => {
    try {
      const result = await Product.deleteOne({ _id: prodId });
      if (result.deletedCount === 0) {
        console.log('No product found with the given id');
      } else {
        console.log('Product deleted successfully');
      }
    } catch (error) {
      console.error(error);
    }
  };

  module.exports = deleteProduct;

// Function to connect to MongoDB (not required with Mongoose)
// ... (remove this function)

// Function to get all products (assuming you have a Product collection)


// Example usage
// getProducts().then(products => console.log(products));






