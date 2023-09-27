import { useEffect, useState } from "react";
import {
  getAllProducts,
  getCategories,
  getProductsFromCategory,
} from "../api/Apidata";
import Card from "../components/Card";
const Productpage = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    getAllProducts().then((data) => setData(data));
    getCategories().then((data) => setCategory(data));
  }, []);
  return (
    <>
      <div className="product-cont">
        <div className="product-cont-part1">
          <h1>Categories</h1>
          <div className="d-flex flex-column mb-3 categ">
            {category !== null ? (
              category.map((item) => (
                <div
                  className="p-2 categ-list"
                  onClick={() => {
                    getProductsFromCategory(item).then((data) => setData(data));
                  }}
                >
                  {item}
                </div>
              ))
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>

        <div className="product-cont-part2">
          {data !== null ? (
            data.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Productpage;