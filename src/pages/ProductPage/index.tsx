import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { name } = useParams();

  console.log(name);

  return <h1>hello</h1>;
};
