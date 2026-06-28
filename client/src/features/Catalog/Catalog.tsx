import { Box } from "@mui/material";
import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";

type Props = {
  products: Product[];
  
};

export default function Catalog({ products}: Props) {
  return (
    <Box>
   <ProductList products={products} />
    
    </Box>
  )
}