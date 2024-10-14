import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import Home from "@/screens/home";
import '@/index.css';
import App from "src/App.jsx";

const paths = [
    {
        path: '/Home', 
        element: <Home />,
    },
    {
        path: '/', 
        element: <App />,
    }
];

const BrowerRouter = createBrowserRouter(paths);

const Calculator = () => {
    return (
        <MantineProvider>
            <RouterProvider router={BrowerRouter}/>
        </MantineProvider>
    );
}

export default Calculator;
