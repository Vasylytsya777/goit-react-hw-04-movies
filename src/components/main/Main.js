import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LoaderSpinner from "../loader/LoaderSpinner";
import { mainRoutes } from "../../routes/MainRoutes";
import MovieDetailsPage from "../pages/moviedetails/MovieDetailsPage";
import DefaultPage from "../pages/DefaultPage";

const Main = () => {
  return (
    <Suspense fallback={<LoaderSpinner />}>
      <Switch>
        {mainRoutes.map(({ path, name, exact, component: MyComponent }) => (
          <Route
            path={path}
            exact={exact}
            key={path}
            render={() => <MyComponent name={name} />}
          />
        ))}
        <Route path="/movies/:id" component={MovieDetailsPage}></Route>
        <Route component={DefaultPage} />
      </Switch>
    </Suspense>
  );
};

export default Main;
