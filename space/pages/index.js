import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
//Styles
import { Wrapper, Content } from '../styles/Home.styles';

export default function Home({ data }) {
  console.log(data)
  return (
    <Wrapper>
      <Content>
        <h1 className="heading">Astronomy Picture of the Day!</h1>
        <p className="sub-heading">Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
        <div className="picture-container">
          <Link href={data.hdurl}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" className="camera-icon" fill="none" viewBox="0 0 24 24" stroke="#fff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          </Link>
          <Image priority="true" className='picture' src={data.url} height='1080px' width='1920px' />
        </div>
        <div className="picture-info">
          <h2 className="picture-title">{data.title}</h2>
          <p className="copyright">Image Credit: {data.copyright}</p>
          <h3 className="explanation-heading">Explanation:</h3>
          <p className="explanation">{data.explanation}</p>
        </div>
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