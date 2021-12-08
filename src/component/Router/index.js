import { Routes,Route } from "react-router";
import Home from '../Home';
import Aboutus from '../Aboutus';
import Template from  '../Template';
import Contacts from '../Contacts';
import List from '../List';
import Account from '../Account';
const CustomRoutev = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />}/>
        <Route path="/Template" element={<Template />} />
        <Route path="/Contacts" element={<Contacts />} /> 
        <Route path="/List" element={<List/>} />
        <Route path="/Account" element={<Account/>} />
     
        </Routes>
    )
}
export default CustomRoutev;