import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as routes from "../constants/routes"; 
import Main from "./StyledComponents/StyledDiv";
import Header from "./Header";

const Home = lazy(()=> import("../routes/Home"));


const queryClient=new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true
    },
    mutations: {
      retry: false,
      suspense: true
    }
  }
});

const Layout=()=>{
  <>
  <Header />
  <Main>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </QueryClientProvider>
  </Main>
  </>
}

const App=()=> {
  const route=(path, element, children)=>({path, element, children});

  const pages=[];
  // ホーム画面
  pages.push(route(routes.HOME, <Home />));


  const router=createBrowserRouter([route("/", <Layout />, pages)]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
