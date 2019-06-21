import React from 'react';
import {Link} from 'react-router-dom';

export const BackToHome = () => {
  return (
    <Link
      className="button is-primary"
      to="/">
      Back to Search
    </Link>
  )
}
