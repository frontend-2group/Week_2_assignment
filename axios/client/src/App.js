// axios
import { useEffect } from "react";
import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/api/product';

function App() {
  const [productList, setProductList] = useState(null);
  // request data
  const fetchData = async() => { 
    const response = await axios.get(SERVER_URL);  
    setProductList(response.data);
  }; 

  // run - only 1st component rendering
  useEffect(() => {
    // request data
    fetchData()
  }, []);

  //onSubmit handler
  const onSubmitHandler = async(e) => {
    // form -> get
    e.preventDefault(); 

    const image = e.target.image.value;
    const text = e.target.text.value;
    const number = e.target.number.value;

    // request server
    // data -> 2nd param
    await axios.post(SERVER_URL, { image, text, number });
    fetchData();
  }

  // data
  return (
    <div className="App">
      <h1>상품 등록하기</h1>
      <form onSubmit={ onSubmitHandler }>
        <input name="image" value='thumbNail' />
        <input name="text" value='brandName' />
        <input name="number" type="discountRate" />
        <input name="number" type="currentAmount" />
        <input name="number" type="maxAmount" />
        <input type="submit" value='추가' />
      </form>
      <hr />
      <h1>무진장 시그니처 특가</h1>
      <h3>단, 10일, 여름 기획 상품</h3>
      {productList?.map((product) => {
        <div key = {product.id} style={{display: ' flex'}}>
          <div>{product.thumbNail}</div>
          <div>{product.brandName}</div>
          <div>{product.discountRate}</div>
          <div>{product.discountBar}</div>
          <div>{product.currentText}</div>
        </div>
      })}
    </div>
  );
}

export default App;
