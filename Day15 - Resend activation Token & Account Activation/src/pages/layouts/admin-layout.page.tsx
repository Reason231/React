import "flowbite"
import "flowbite-react"
import { AdminHeaderComponent } from "../../components/header/admin-header.component";
import { AdminSideBarComponent } from "../../components/sidebar/admin-sidebar.component";
import { Outlet } from "react-router";
export const AdminPageLayout = () => {
  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">

        {/* Navbar */}
      <AdminHeaderComponent />

        {/* Sidebar */}
       <AdminSideBarComponent />

        <main className="p-4 md:ml-64 h-auto pt-20">
          <Outlet />
        </main>
      </div>
    </>
  );
};
