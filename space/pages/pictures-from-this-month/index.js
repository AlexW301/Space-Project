import Image from 'next/dist/client/image';
//Styles
import { Wrapper, Content } from '../../styles/PicturesOfTheMonth.styles';

const PicturesFromThisMonth = ({ data }) => {

    console.log(data)

    return (
        <Wrapper>
            <Content>
                <h1 className="heading">Pictures from this month</h1>

                <div className="gallery">
                    {data.map(el => {
                        if (el.media_type !== 'video') {
                            return (
                                <div key={el.title} className="thumbnail">
                                    <Image className='image' src={el.url} height='180px' width='300px'/>
                                    {/* <img src={el.url}></img> */}
                                    <p className="title">{el.title}</p>
                                    <p className="date">{el.date}</p>
                                </div>
                            )
                        } else if (el.media_type == 'video') {}
                        
                    })}
                </div>
            </Content>
        </Wrapper>
    )
}

export const getStaticProps = async () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=xSycodUVBCEYoviqAR3LxGU8l0OBgSeZeGfh6GY7&start_date=${year}-${month}-01&end_date=${year}-${month}-${day}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

export default PicturesFromThisMonth;