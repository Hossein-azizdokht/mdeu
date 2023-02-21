import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const GloasProgress = () => {
  const data = [
    { value: 60, label: "احداث 800 مدرسه متوسطه" },
    { value: 10, label: "تاسیس مرکز مشاوره" },
    { value: 25, label: "خرید تجهیزات آزمایشگاهی" },
    { value: 25, label: "احداث 800 مدرسه متوسطه" },
    { value: 68, label: "تاسیس مرکز مشاوره" },
    { value: 75, label: "خرید تجهیزات آزمایشگاهی" },
    { value: 55, label: "احداث 800 مدرسه متوسطه" },
    { value: 45, label: "تاسیس مرکز مشاوره" },
    { value: 55, label: "خرید تجهیزات آزمایشگاهی" },
    { value: 36, label: "احداث 800 مدرسه متوسطه" },
    { value: 6, label: "تاسیس مرکز مشاوره" },
    { value: 25, label: "خرید تجهیزات آزمایشگاهی" },
  ];
  //   const now = 60;
  return data?.map((item) => (
    <div className="gloalProgressWrp d-flex" title={item.label}>
      <div className="lbl">{item.label}</div>
      <ProgressBar
        className="flex-grow-1"
        now={item.value}
        label={`${item.value}%`}
      />
    </div>
  ));
};

export default GloasProgress;
