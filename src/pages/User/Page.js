import Banner from "../../components/Banner/Banner"
import Content from "../../components/Content/Content"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import './Page.scss'
const Page = () => {
    return (
        <div className = "page">
            <Header/>
            <Banner/>
            <Content/>
            <hr/>
            <Footer/>
        </div>
    )
}
export default Page