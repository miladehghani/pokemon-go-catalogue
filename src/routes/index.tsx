import { Route } from "react-router-dom";
import { RouteType } from "types";
import { PokemonListPage } from "pages/PokemonListPage";
import { Favourits } from "pages/Favourits";
import { PokemonDetailsPage } from "pages/PokemonDetailsPage";
import { Layout } from "components/Layout";
import { PokemonCompare } from "pages/PokemonCompare";

const routes: RouteType[] = [
  {
    path: "/",
    exact: true,
    component: PokemonListPage,
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
