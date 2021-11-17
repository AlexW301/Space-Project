import Layout from "../components/Layout"
//Styles
import { GlobalStyle } from "../styles/Global.styles"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    <GlobalStyle/>
    </>
  )
}

export default MyApp
