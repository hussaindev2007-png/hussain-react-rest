import { useState } from "react";

import CategoryFilter from "./component/CategoryFilter";
import Products from "./component/Products";
import { product } from "./data/project";

import Footer from "./component/Footer";


import { getVisibleProducts } from "./data/product-filters";

function App() {
   const [selectedCategories, setSelectedCategories] = useState([]);

  const filterProducts = getVisibleProducts(selectedCategories);

  const onChangeCategoryHandler = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );


    }
       
    }
 

  return (
  


    
<div className="grid grid-cols-12 gap-3 my-2 mx-2">
  <div className="col-span-2">
    <CategoryFilter  
    selectedCategories={selectedCategories}
    onChangeCategory={onChangeCategoryHandler} />
  </div>
  <div className="col-span-10">
    <Products products={filterProducts} /> 
<Footer />
  </div>
</div>

     


    
  );
}


export default App;
