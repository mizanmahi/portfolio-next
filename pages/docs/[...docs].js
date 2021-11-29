import { useRouter } from 'next/dist/client/router';
import React from 'react';

const index = () => {
   const { query } = useRouter(); // query is an array with the query params

   return <div>Docs home page</div>;
};

export default index;

// This is a catch all route page for docs.
// By default, the page is rendered in the browser only when there is something after the "/docs/here" url in the browser.
// If [[...fileName]] is used in this file's name, then the '/docs' will not lead to an error "404" page. otherwise it would.
