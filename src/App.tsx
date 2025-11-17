import Sidebar from "./components/Sidebar";
import MapView from "./components/MapView";

export default function App() {
  return (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      <Sidebar />
      <div style={{ flex: 1, height: "100%" }}>
        <MapView />
      </div>
    </div>
  );
}
