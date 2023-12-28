import React, { useEffect } from "react";

const PublicLayout = ({ children, title }) => {
  const updateTabTitle = (newTitle) => {
    document.title = newTitle;
  };
  useEffect(() => {
    updateTabTitle(title);
  }, []);
  return (
    <>
      <header>Navbar</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default PublicLayout;
