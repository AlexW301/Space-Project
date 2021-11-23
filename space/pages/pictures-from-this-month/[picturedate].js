import { useRouter } from 'next/router';
//Styles
import { Wrapper, Content } from '../../styles/PictureDate.styles';


const PictureDate = ({data}) => {
    // Use next js router to get/use url params
    // const router = useRouter();
    // const date = router.query.picturedate;

    console.log(data)
    return (
        <Wrapper>
            <Content>
                <h1>{data.title}</h1>
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

export const getStaticProps = async ({params}) => {
 
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=xSycodUVBCEYoviqAR3LxGU8l0OBgSeZeGfh6GY7&date=${params.picturedate}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

export default PictureDate;