import ThemeSwitch from "./theme.switch";

const AppHeader = () => {
  return (
    <div className="h-20 w-full bg-[#9395D3] text-white dark:bg-[--background-layout] flex items-center justify-between px-5 sticky top-0 z-10 shadow-md border-b border-[#9395D3] dark:border-[hsl(var(--border))]">
      <div className="flex items-center gap-3">
        <svg
          className="w-8 h-8 sm:w-6 sm:h-6"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="6"
            width="24"
            height="22"
            rx="3"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="4"
            y1="10"
            x2="28"
            y2="10"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="10"
            y1="3"
            x2="10"
            y2="9"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="22"
            y1="3"
            x2="22"
            y2="9"
            stroke="white"
            strokeWidth="1.5"
          />
          <rect x="8" y="13" width="3" height="3" rx="0.5" fill="white" />
          <rect x="14" y="13" width="3" height="3" rx="0.5" fill="white" />
          <rect x="20" y="13" width="3" height="3" rx="0.5" fill="white" />
          <rect x="8" y="19" width="3" height="3" rx="0.5" fill="white" />
          <rect x="14" y="19" width="3" height="3" rx="0.5" fill="white" />
          <rect x="20" y="19" width="3" height="3" rx="0.5" fill="white" />
        </svg>

        <p className="text-3xl uppercase font-bold">todo app</p>
      </div>
      <div className="flex items-center gap-3 ml-auto">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default AppHeader;
