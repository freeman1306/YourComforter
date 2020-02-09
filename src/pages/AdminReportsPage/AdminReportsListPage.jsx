import React from "react";

import BasicPageLayout from "../../layouts/BasicPageLayout/BasicPageLayout";
import AdminReportsContainer from "../../containers/AdminReportsContainer/AdminReportsContainer";

const AdminReportsListPage = () => {
  return (
    <BasicPageLayout title="Reports">
      <AdminReportsContainer />
    </BasicPageLayout>
  );
};

export default AdminReportsListPage;
