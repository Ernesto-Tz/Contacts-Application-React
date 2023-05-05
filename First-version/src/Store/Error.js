import Header from '../Layout/Header/Header'

function ErrorPage() {
  return(
    <>
      <Header/>
      <main>
        <h1>An error ocurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;