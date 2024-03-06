import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as routes from "../../constants/routes";
import { Main, MainVisual, Title } from "../StyledComponents/StyledDiv";
import Header from "../Header";
import bgimage from "../img/background.jpg";
import HomeImage from "../img/mainvisual.jpg";

const Home = lazy(() => import("../../routes/Home"));
const Member = lazy(() => import("../../routes/Member"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true,
    },
    mutations: {
      retry: false,
      suspense: true,
    },
  },
});

const Layout = () => (
    <>
      <Header />
      <Main $bgimage={bgimage}>
        <MainVisual src={HomeImage} alt="キモヒゲの成長記録" />
        <Title>キモヒゲOFFICIAL WEB SITE</Title>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </QueryClientProvider>
      </Main>
    </>
  )

const Routing = () => {
  const route = (path, element, children) => ({ path, element, children });

  const pages = [];
  // ホーム画面
  pages.push(route(`${routes.HOME}`, <Home />));
  // メンバーページ
  pages.push(route(`${routes.MEMBER}`, <Member />));

  const router = createBrowserRouter([route("/", <Layout />, pages)], { basename: process.env.PUBLIC_URL });

  return <RouterProvider router={router} />;
}

export default Routing;
