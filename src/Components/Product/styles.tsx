import styled from "styled-components";

export const ProductCotainer = styled.div`
height:10rem;
width: 25rem;
margin-top: 1rem;
margin-left: 1rem;
display: flex;
justify-content: space-between;

border: 1px solid black;
border-radius: 5px;

img{
  max-width:10rem;
  max-height:10rem;
}
`

export const TextCotainer = styled.div`
display: block;

span{
  font-size: 1.2rem;
  margin:0 10px 0 10px;
}
p{
  margin-left: 5px;
  margin-top: 10px;
}
`