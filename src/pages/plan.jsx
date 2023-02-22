import React from "react";
import { MDBDataTable } from "mdbreact";
const data = {
  columns: [
    {
      label: "عنوان",
      field: "name",
      sort: "asc",
      width: 150,
    },
    {
      label: "شرح",
      field: "desc",
      sort: "asc",
      width: 270,
    },
    {
      label: "تاریخ",
      field: "date",
      sort: "asc",
      width: 200,
    },
    {
      label: "وضعیت",
      field: "state",
      sort: "asc",
      width: 100,
    },
    {
      label: "تاریخ شروع",
      field: "sdate",
      sort: "asc",
      width: 150,
    },
    {
      label: "مبلغ",
      field: "money",
      sort: "asc",
      width: 100,
    },
  ],
  rows: [
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
    {
      name: "این یک عنوان تست است",
      desc: "شرح این ردیف",
      date: "1401/11/30",
      state: "61",
      sdate: "1401/11/05",
      money: "5.000.000.000",
    },
  ],
};

const Plan = () => {
  return (
    <div className="card p-4">
      <div className="title">نظام برنامه ریزی</div>
      <MDBDataTable
        infoLabel={["نمایش", "تا", "از", "ردیف"]}
        bordered
        hover
        searchLabel="جستجو.."
        paginationLabel={["قبلی","بعدی"]}
        data={data}
        displayEntries={false}
        noRecordsFoundLabel="داده ای یافت نشد!"
      />
    </div>
  );
};
export default Plan;
