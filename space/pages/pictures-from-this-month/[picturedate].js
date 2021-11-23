import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
//Styles
import { Wrapper, Content } from '../../styles/PictureDate.styles';


const PictureDate = ({ data }) => {
    // Use next js router to get/use url params
    // const router = useRouter();
    // const date = router.query.picturedate;

    console.log(data)
    return (
        <Wrapper>
            <Content>
                <h1 className="title">{data.title}</h1>
                <div className="picture-container">
                    <Link href={data.hdurl}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" className="camera-icon" fill="none" viewBox="0 0 24 24" stroke="#fff">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Link>
                    <Image priority="true" className='picture' src={data.url} height='1080px' width='1920px' />
                </div>
                <p className="explanation">{data.explanation}</p>
            </Content>
        </Wrapper>
    )
}

export const getStaticPaths = async () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=xSycodUVBCEYoviqAR3LxGU8l0OBgSeZeGfh6GY7&start_date=${year}-${month}-01&end_date=${year}-${month}-${day}`);
    const data = await res.json();

    const paths = data.map((el) => {
        return {
            params: { picturedate: el.date }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=xSycodUVBCEYoviqAR3LxGU8l0OBgSeZeGfh6GY7&date=${params.picturedate}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

export default PictureDate;