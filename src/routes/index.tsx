import { Route } from "react-router-dom";
import { RouteType } from "types";
import { Home } from "pages/Home";
import { Generations } from "pages/Generations";
import { Favourits } from "pages/Favourits";
import { PokemonDetailsPage } from "pages/PokemonDetailsPage";
import { Layout } from "components/Layout";
import { PokemonCompare } from "pages/PokemonCompare";

const routes: RouteType[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/pokemon/:pokemonId",
    component: PokemonDetailsPage,
  },
  {
    path: "/compare/:pokemonIds",
    component: PokemonCompare,
  },
  {
    path: "/generations",
    exact: true,
    component: Generations,
  },
  {
    path: "/favourits",
    exact: true,
    component: Favourits,
  },
];

export const UserRoutes = () => (
  <Layout>
    {routes.map((route) => (
      <Route path={route.path} exact={route.exact} key={route.path}>
        <route.component />
      </Route>
    ))}
  </Layout>
);
