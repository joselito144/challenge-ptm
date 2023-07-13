import getProducts from "../helpers/getProducts";
import { useEffect, useState } from "react";

const useGetProducts = (secProduct) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProducts().then(
      response => {
        setData(response);
        setIsLoading(false);
    })
  }, [secProduct])

  return {
    data, isLoading
  }
}

export default useGetProducts;