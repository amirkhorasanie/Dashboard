import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../../features/Sidebar/Sidebar";
import Topbar from "../../features/Topbar/Topbar";
import BackgroundOverlay from "../common/BackgroundOverlay";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="relative lg:p-4 flex min-h-screen bg-gray-50">

      {/* Overlay همیشه هست ولی زیر همه چیز */}
      <div className="absolute inset-0 z-0">
        <BackgroundOverlay />
      </div>

      {/* Sidebar همیشه بالاتر از overlay */}
      <div className="z-50">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Main content */}
      <section className="flex-1 flex flex-col relative z-10">
        <Topbar setSidebarOpen={setSidebarOpen} />
        <div className="lg:pt-5 pt-25 px-4 sm:px-6 lg:px-8 flex-1 overflow-auto">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
