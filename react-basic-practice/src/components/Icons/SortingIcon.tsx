import React from "react";

interface SortingIconProps {
  isAscending?: boolean;
  isActive?: boolean;
}

const SortingIcon: React.FC<SortingIconProps> = ({
  isAscending = true,
  isActive = false,
}) => {
  const topColor = isActive && !isAscending ? "#FF0000" : "#BCC2CE";
  const bottomColor = isActive && isAscending ? "#FF0000" : "#BCC2CE";

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 13.1281L5.46033 9.5L10.5397 9.5L8 13.1281Z"
        stroke={bottomColor}
        fill={bottomColor}
      />
      <path
        d="M8.40962 2.58517C8.21057 2.30081 7.78943 2.30081 7.59038 2.58517L5.05071 6.21327C4.81874 6.54466 5.05582 7 5.46033 7H10.5397C10.9442 7 11.1813 6.54466 10.9493 6.21327L8.40962 2.58517Z"
        fill={topColor}
      />
    </svg>
  );
};

export default SortingIcon;
