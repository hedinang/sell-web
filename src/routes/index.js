/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import { PublicLayout } from "../components/layouts/PublicLayout";
import { ItemProvider } from "../context/ItemContext";
import { AdminBidList } from "../pages/bid/AdminBidList";
import { OrderList } from "../pages/cart/OrderList";
import { AdminItemDetail } from "../pages/item/AdminItemDetail";
import { AdminItemList } from "../pages/item/AdminItemList";
import { ItemDetail } from "../pages/item/ItemDetail";
import Login from "../pages/login";
import { MailManagement } from "../pages/mail/MailManagement";
import { NationList } from "../pages/sim/NationList";
import { SimList } from "../pages/sim/SimList";
import { UserManagement } from "../pages/user/UserManagement";
import { SupplierDetail } from "../pages/sim/SupplierDetail";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  // {
  //   path: "register",
  //   element: <Registration />,
  // },
  {
    path: "*",
    element: <Navigate to="/nation-list" />,
  },
  {
    // path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/nation-list",
        element: <NationList />,
      },
      {
        path: "/sim/search/:condition",
        element: <SimList />,
      },
      {
        path: "/sim/supplier/:supplierId",
        element: <SupplierDetail />,
      },
    ],
  },
  {
    // path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/inside/bid/bid-list",
        element: <AdminBidList />,
      },
      {
        path: "/inside/bid/item-list/:bidId/:bidStatus",
        element: (
          <ItemProvider>
            <AdminItemList />
          </ItemProvider>
        ),
      },
      {
        path: "/inside/bid/item-detail/:itemId",
        element: (
          <ItemProvider>
            <AdminItemDetail />
          </ItemProvider>
        ),
      },
      {
        path: "/inside/users",
        element: (
          <ItemProvider>
            <UserManagement />
          </ItemProvider>
        ),
      },
      {
        path: "/cart",
        element: (
          <ItemProvider>
            <OrderList />
          </ItemProvider>
        ),
      },
      {
        path: "/user-list",
        element: (
          <ItemProvider>
            <UserManagement />
          </ItemProvider>
        ),
      },
      {
        path: "/mail-list",
        element: (
          <ItemProvider>
            <MailManagement />
          </ItemProvider>
        ),
      },
    ],
  },
]);
export default router;
