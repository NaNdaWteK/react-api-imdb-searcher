import React from 'react';

import {BackToHome} from '../components/BackToHome';

export const NotFound = () => {
  return (
    <div>
      <h1 className="title">404!</h1>
      <h2>Page not found</h2>
      <BackToHome />
    </div>
  )
}
