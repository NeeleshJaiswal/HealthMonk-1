import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomisedBreadcrumb({title}) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="#" onClick={handleClick}>
        Home
      </Link>
      <Link color="inherit" href="/">
        Blog
      </Link>
      <Link
        color="textPrimary"
        href="#"
        onClick={handleClick}
        aria-current="page"
      >
        {title}
      </Link>
    </Breadcrumbs>
  );
}