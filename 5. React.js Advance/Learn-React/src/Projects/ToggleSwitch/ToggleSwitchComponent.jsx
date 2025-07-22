import { useState } from "react";
import styles from "./TSC.module.css";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

export const ToggleSwitchButton = () => {
  const [toggleValue, setToggleValue] = useState(false);

  function handleToggleSwitch() {
    setToggleValue(() => !toggleValue);
  }

  const switchValue = toggleValue ? "on" : "off";
  const switchPosition = toggleValue ? "on-position" : "off-position";

  return (
    <>
      {toggleValue ? (
        <WiDaySunny style={{ fontSize: "4rem" }} />
      ) : (
        <WiMoonAltThirdQuarter style={{ fontSize: "4rem" }} />
      )}

      <div
        className={`${styles["btn-div"]} ${styles[switchValue]}`}
        onClick={handleToggleSwitch}
      >
        <div className={`${styles["toggle"]} ${styles[switchPosition]}`}>
          {switchValue}
        </div>
      </div>
    </>
  );
};
