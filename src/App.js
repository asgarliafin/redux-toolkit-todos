import Header from "./components/header/Header";
import Form from "./components/form/Form";
import List from "./components/list/List";
import Footer from "./components/footer/footer";

function App() {

  return (
    <section className="todoapp">
      <Header />
      <Form />
      <List />
      <Footer />
    </section>
  );
}

export default App;
