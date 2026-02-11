import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import "./styles/App.css";

function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}

export default App;
