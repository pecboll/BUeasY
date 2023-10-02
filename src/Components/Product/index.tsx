import { ProductCotainer, TextCotainer } from "./styles";
import vasodeflor from "../../assets/vasodeflor.jfif"

export function Product() {
  return(
    <ProductCotainer>
      <div>
      <img src={vasodeflor} alt="imagem de um vaso de flor" />
      </div>
      <TextCotainer>
        <span>Vaso de Flor.</span>
     <p>Vaso de flor branco 23cmx23cmx50cm ideal para flores medias, feito em pastico reciclavel.</p>
     </TextCotainer>
      
    </ProductCotainer>
  )
}