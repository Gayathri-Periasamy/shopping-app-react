import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow">
        <Header />
      </header>

      {/* Main Page Content */}
      <main className="bg-white flex-grow px-4 py-6 sm:px-6 md:px-10 max-w-6xl mx-auto w-full shadow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-4 shadow">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
