import '../styles/root.css';
import MapComponent from '../components/mapComponent';

export default function Root() {
    return (
        <main>
            <header className = "home-header">
                <div className = "city-name">
                    <h1>Zephyr</h1>
                </div>
                <div className = "walking-time">
                    <h2>5-10min </h2>
                </div>
            </header>
            <div className="root-page">
                <div className = "map-section">
                <MapComponent />
                </div>
            </div>
        </main>
    );
}