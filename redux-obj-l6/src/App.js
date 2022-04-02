import { useDispatch, useSelector } from "react-redux";

function App() {
  const products = useSelector(state => {
    return state.products
  })

  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    dispatch({ type: "deleteProduct", payload: id })
  }

  const addProduct = (name) => {
    const obj = {
      name,
      id: Date.now()
    }
    dispatch({ type: 'addProduct', payload: obj })
  }
  return (
    <div >
      <h1>Продукты</h1>

      {products.map((product) => {
        return <> <li key={product.id}>
          {product.name}
        </li>
          <button onClick={() => deleteProduct(product.id)}>delete</button>
          {/* <button onClick={() => dispatch({ type: 'deleteProduct', payload: product.id })}>delete</button> */}
        </>
      })}

      <button onClick={() => addProduct(prompt())}>Добавить продукт</button>
    </div>

  );
}

export default App;
