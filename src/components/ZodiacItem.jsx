// ZodiacItem.jsx
import React from "react";
import { useTranslation } from "react-i18next";

function ZodiacItem({ sign, onSignClick }) {
  const { t } = useTranslation();
  console.log(sign);

  return (
    <div className="zodiac-item" onClick={() => onSignClick(sign.id)}>
      <img src={sign.icon} alt={`${sign.name} icon`} className="zodiac-icon" />
      <h3>{t(`zodiac.${sign.id}.name`) || sign.name}</h3>
      <p>{t(`zodiac.${sign.id}.dateRange`) || sign.dateRange}</p>
    </div>
  );
}

export default ZodiacItem;
