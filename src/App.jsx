import './App.css';
import { 
  BarChart3, Boxes, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle 
} from 'lucide-react';
import Sidebar, { SidebarItem } from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Dashboard from './Pages/Dashboard';


export default function App() {
  const [activeItem, setActiveItem] = useState("/");

  return (
    <Router>
      <div className='App flex'>
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/" active={activeItem === "/"} setActiveItem={setActiveItem} />
          <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" to="/statistics" active={activeItem === "/statistics"} setActiveItem={setActiveItem} />
          <SidebarItem icon={<UserCircle size={20} />} text="User" to="/user" active={activeItem === "/user"} setActiveItem={setActiveItem} />
          <SidebarItem icon={<Boxes size={20} />} text="Inventory" to="/inventory" active={activeItem === "/inventory"} setActiveItem={setActiveItem} />
          <SidebarItem icon={<Package size={20} />} text="Orders" to="/orders" active={activeItem === "/orders"} setActiveItem={setActiveItem} />
          <SidebarItem icon={<Receipt size={20} />} text="Billings" to="/billings" active={activeItem === "/billings"} setActiveItem={setActiveItem} />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" to="/settings" active={activeItem === "/settings"} setActiveItem={setActiveItem} />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" to="/help" active={activeItem === "/help"} setActiveItem={setActiveItem} />
        </Sidebar>

        {/* Konten utama */}
      <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}
