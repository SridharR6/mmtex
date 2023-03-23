import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Routes,Route, HashRouter } from 'react-router-dom';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { Products } from './components/Products';
import { Profile } from './components/Profile';
import { AuthenticationProvider } from './components/Authentication';
import { Header } from './components/Header';
import { UserLogin } from './components/UserLogin';
import { SignUp } from './components/SignUp';
import { AdminLogin } from './components/AdminLogin';
import { KitchenTowels } from './components/KitchenTowels';
import { Singles } from './components/Singles';
import { Rolls } from './components/Rolls';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <AuthenticationProvider>
            <Header/>
            <Routes>
                <Route path='/' element = {<Home/>}></Route>
                <Route path='/home' element = {<Home/>}></Route>
                <Route path='/aboutus' element = {<AboutUs/>}></Route>
                <Route path='/contact' element = {<Contact/>}></Route>
                <Route path='/profile' element = {<Profile/>}></Route>
                <Route path='/signup' element = {<SignUp/>}></Route>
                <Route path='/userlogin' element = {<UserLogin/>}></Route>
                <Route path='/adminlogin' element = {<AdminLogin/>}></Route>
                <Route path='/kitchentowels' element = {<KitchenTowels/>}></Route>
                <Route path='/singles' element = {<Singles/>}></Route>
                <Route path='/rolls' element = {<Rolls/>}></Route>

            </Routes>
        </AuthenticationProvider>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
