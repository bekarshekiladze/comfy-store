import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log({ error });

  if (error.status === 404) {
    return (
      <main className="grid place-content-center min-h-svh gap-2">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary sm:text-5xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight ">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
        <div className="mt-10">
          <Link to={"/"} className="btn btn-secondary">Go back</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="grid place-content-center min-h-svh gap-2">
      <h4 className="text-center font-bold text-4xl">There was an error...</h4>
      <Link to={"/"}>Go back</Link>
    </main>
  );
}
export default Error;
