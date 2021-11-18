import Head from 'next/head'
import Image from 'next/image'
//Styles
import { Wrapper, Content } from '../styles/Home.styles';

export default function Home({data}) {
  console.log(data)
  return (
    <Wrapper>
      <Content>
      Test
      <Image src={data.hdurl} height='300px' width='300px'/>
      </Content>
    </Wrapper>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=xSycodUVBCEYoviqAR3LxGU8l0OBgSeZeGfh6GY7`);
  const data = await res.json();
  
  return {
    props: {
      data //instead of data: data,
    }, //Will be passed to the page component as props
  }
}