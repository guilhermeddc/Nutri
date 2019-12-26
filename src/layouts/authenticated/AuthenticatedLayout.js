import React from 'react';

const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <h2>authenticated layout</h2>
      {children}
    </div>
  );
};

export default AuthenticatedLayout;