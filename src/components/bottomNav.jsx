import { NavLink } from 'react-router-dom';
import '../styles/bottomNav.css';

export default function BottomNav() {
    return (
        <footer>
            <nav className="bottom-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/games">Games</NavLink>
                <NavLink to="/stats">Stats</NavLink>
                <NavLink to="/social">Social</NavLink>
            </nav>
        </footer>
    );
}