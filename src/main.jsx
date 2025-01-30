import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import { createRoot } from 'react-dom/client';
import Welcome from './components/Welcome.jsx';
import About from './components/About.jsx';
import ContactDetails from './components/ContactDetails.jsx';
import MainLayout from './components/MainLayout.jsx';
import Login from "./components/Login.jsx"; 
import ToViewCreate from './components/ToViewCreate.jsx';
import ViewRecipes from './components/ViewRecipes.jsx';
import CreateRecipe from './components/CreateRecipe.jsx';
import './index.css';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
          <Route element={<MainLayout />} >
        <Route path="/" element={<Welcome />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactDetails" element={<ContactDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/toviewcreate" element={<ToViewCreate />} />
        <Route path="/view-recipes" element={<ViewRecipes />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
