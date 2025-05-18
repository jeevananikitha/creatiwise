// src/App.jsx
// import Sidebar from './Components/Sidebar';
import DashboardTable from './Components/DashboardTable';

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar /> */}
      <main className="flex-1">
        <DashboardTable />
      </main>
    </div>
  );
}
