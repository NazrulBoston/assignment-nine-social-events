import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Header></Header>
            <h2>This is home</h2>
        </div>
    );  
};

export default Home;