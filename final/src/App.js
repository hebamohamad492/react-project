import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useCallback, useEffect,  useState ,useParams } from "react";
import { EditItems } from "./EditItems";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";

function App() {
  const [products, setProducts] = useState(appmenu);
  console.log(products)
  let allItems = [...products];

  
  function handleOnAddItem(product) {
    const lastId = allItems[allItems.length - 1].id;
    // console.log({ ...product, id:+(lastId) + 1 }+"-----")
    allItems.push({ ...product, id:Number(lastId) + 1 });
    setProducts(allItems);
  }

  function getProductById(productId) {
    return products.find((item) => +item.id === +productId);
  }

  function handleOnEditItem(product) {
    let allItems = [...products]
    // const indx = getProductById();
    const indx = allItems.findIndex(prodct=>+prodct.id ===+ product.id) 
    allItems[indx] = product;
    setProducts(allItems)  ;

  }
  
  function handleOnDelete(productId) {
    let allProducts = [...products];
    allProducts = allProducts.filter((product) => product.id !== productId);
    setProducts(allProducts);
  }

  function  handleAboutPage() {
    return(    <div> wellcom</div>)
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="Home" element={<HomePage products={products} getProductById={getProductById}  onAddProduct={handleOnAddItem} onDelete={handleOnDelete} />}  />

        <Route path="about" element={<AboutPage   about={ handleAboutPage}/>} /> 
        <Route 
          path="edit-Item/:productId"
          element={<EditItems getProductById={getProductById} onEditProduct={handleOnEditItem}/> } />

        <Route path="*" element={<h1 className="m-5 text-danger">404 !!we are sorry ,this page is'nt found </h1>} />



      </Routes>
    </div>
  );
}

export default App;
const appmenu = [
  { id: "1", name: "1-Burger" },
  { id: "2", name: "2-Pasta" },
  { id: "3", name: "3-Green Soup" },
  { id: "4", name: "4-Salad"},
  { id: "5", name: "5-Pastrami" },
];
