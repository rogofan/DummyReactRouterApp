import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error ocurred</h1>
        <p>Could not find this page! Error 404!</p>
      </main>
      ;
    </>
  );
}
export default ErrorPage;
