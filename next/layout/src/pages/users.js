import React from 'react'
import Head from "next/head";
import { withLayout, useGenericReducer } from 'onekijs';
import SiteLayout from '../layout/siteLayout';

const UsersPage = () => {
  useGenericReducer("layout.site", {
    "title": "Users page",
    "subTitle": "Subtitle of Users page"
  });

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <div>This is the users page</div>
    </>
  );
}

export default withLayout(UsersPage, SiteLayout);
