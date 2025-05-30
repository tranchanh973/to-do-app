"use client";
import { useContext, useState } from "react";
import { useAtom } from "jotai";
import { isFilterAtom } from "../types/atom"; // đường dẫn tùy theo vị trí của file

const AppFooter = () => {
  // Luu tru trang thai fillter
  // Neu trang thai fillter la true thi hien thi danh sach todo da hoan thanh
  const [isFilter, setIsFilter] = useAtom(isFilterAtom);
  const [activeFilter, setActiveFilter] = useState("all");

  // Set lai trang thai fillter, set cho trang thai hien thi danh sach cac fillter la all
  const toggleNotFilter = () => {
    setIsFilter(false);
    setActiveFilter("all");
  };

  // Set lai trang thai fillter, set cho trang thai hien thi danh sach cac fillter la completed
  const toggleFilter = () => {
    setIsFilter(true);
    setActiveFilter("completed");
  };

  return (
    <div className="h-16 w-full bg-white dark:bg-[--background-layout] flex items-center fixed bottom-0 left-0 border-t border-white dark:border-[hsl(var(--border))]">
      <div className="flex flex-1 flex-col items-center justify-center">
        <svg
          onClick={() => toggleNotFilter()}
          className={`${activeFilter === "all" ? "bg-[#dedeec] text-black dark:bg-[--background-button-filter]" : "hover:bg-[#dedeec] dark:hover:bg-[--background-button-filter]"}`}
          style={{ cursor: "pointer" }}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 8.625C10.8358 8.625 10.5 8.96079 10.5 9.375C10.5 9.78921 10.8358 10.125 11.25 10.125V8.625ZM23.75 10.125C24.1642 10.125 24.5 9.78921 24.5 9.375C24.5 8.96079 24.1642 8.625 23.75 8.625V10.125ZM6.25 8.625C5.83579 8.625 5.5 8.96079 5.5 9.375C5.5 9.78921 5.83579 10.125 6.25 10.125V8.625ZM7.5 10.125C7.91421 10.125 8.25 9.78921 8.25 9.375C8.25 8.96079 7.91421 8.625 7.5 8.625V10.125ZM6.25 14.875C5.83579 14.875 5.5 15.2108 5.5 15.625C5.5 16.0392 5.83579 16.375 6.25 16.375V14.875ZM7.5 16.375C7.91421 16.375 8.25 16.0392 8.25 15.625C8.25 15.2108 7.91421 14.875 7.5 14.875V16.375ZM6.25 21.125C5.83579 21.125 5.5 21.4608 5.5 21.875C5.5 22.2892 5.83579 22.625 6.25 22.625V21.125ZM7.5 22.625C7.91421 22.625 8.25 22.2892 8.25 21.875C8.25 21.4608 7.91421 21.125 7.5 21.125V22.625ZM11.25 14.875C10.8358 14.875 10.5 15.2108 10.5 15.625C10.5 16.0392 10.8358 16.375 11.25 16.375V14.875ZM23.75 16.375C24.1642 16.375 24.5 16.0392 24.5 15.625C24.5 15.2108 24.1642 14.875 23.75 14.875V16.375ZM11.25 21.125C10.8358 21.125 10.5 21.4608 10.5 21.875C10.5 22.2892 10.8358 22.625 11.25 22.625V21.125ZM23.75 22.625C24.1642 22.625 24.5 22.2892 24.5 21.875C24.5 21.4608 24.1642 21.125 23.75 21.125V22.625ZM11.25 10.125H23.75V8.625H11.25V10.125ZM6.25 10.125H7.5V8.625H6.25V10.125ZM6.25 16.375H7.5V14.875H6.25V16.375ZM6.25 22.625H7.5V21.125H6.25V22.625ZM11.25 16.375H23.75V14.875H11.25V16.375ZM11.25 22.625H23.75V21.125H11.25V22.625Z"
            fill="#9395D3"
          />
        </svg>
        <p className="text-[#9395D3] text-xs">All</p>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <svg
          onClick={() => toggleFilter()}
          className={`${activeFilter === "completed" ? "bg-[#dedeec] text-white dark:bg-[--background-button-filter]" : "hover:bg-[#dedeec] dark:hover:bg-[--background-button-filter]"}`}
          style={{ cursor: "pointer" }}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.25 15.625L12.0838 21.25L23.75 10"
            stroke="#8B8787"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-[#9395D3] text-xs">Completed</p>
      </div>
    </div>
  );
};

export default AppFooter;
