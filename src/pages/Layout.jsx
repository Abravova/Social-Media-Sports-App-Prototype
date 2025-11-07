import { Outlet } from 'react-router-dom';
import BottomNav from '../components/bottomNav';
import '../styles/layout.css';

export default function Layout() {
    return (
        <div className = "layout">
            <main>
                <Outlet />
            </main>
            <footer>
                <BottomNav />
            </footer>
        </div>
    );
}   