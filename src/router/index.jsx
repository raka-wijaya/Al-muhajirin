import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";
import DetailKelas from "../pages/DetailKelas";
import ProfileGuru from "../pages/ProfileGuru";
import TentangKami from "../pages/TentangKami";
import DaftarSekarang from "../components/DaftarSekarang";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'tentang-kami',
                element: <TentangKami />,
            },
            {
                path: 'detail-kelas',
                element: <DetailKelas />,
            },
            {
                path: 'profile-guru',
                element: <ProfileGuru />,
            },
            {
                path: 'daftar-sekarang',
                element: <DaftarSekarang />,
            },
        ]
    },
])