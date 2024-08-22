import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import ZodiacList from "./components/ZodiacList";
import { getHoroscope } from "./utils/axios";
import "./App.css";

function App() {
  const [selectedSign, setSelectedSign] = useState(null);
  const [horoscope, setHoroscope] = useState(null);
  const [locale, setLocale] = useState("en");
  const { i18n, t } = useTranslation();
  const modalRef = useRef(null);

  useEffect(() => {
    const telegram = window.Telegram?.WebApp;

    let userLanguage = "en"; 

    if (telegram) {
      
      userLanguage = telegram.initDataUnsafe?.user?.language || "en";
    } else {
      
      userLanguage = navigator.language || navigator.userLanguage || "en";
    }

    if (userLanguage.startsWith("ru")) {
      i18n.changeLanguage("ru");
      setLocale("ru");
    } else {
      i18n.changeLanguage("en");
      setLocale("en");
    }
  }, [i18n]);

  useEffect(() => {
    const handleSwipe = (event) => {
      if (event.type === "swiped-right" && selectedSign) {
        handleBackClick();
      }
    };

    const modal = modalRef.current;
    if (modal) {
      modal.addEventListener("swiped-right", handleSwipe);
    }

    return () => {
      if (modal) {
        modal.removeEventListener("swiped-right", handleSwipe);
      }
    };
  }, [selectedSign]);

  const fetchHoroscope = async (sign) => {
    try {
      const data = await getHoroscope(
        sign,
        locale === "ru" ? "original" : "translated"
      );
      setHoroscope(data.horoscope);
    } catch (error) {
      console.error("Error fetching horoscope:", error);
    }
  };

  const handleSignClick = (sign) => {
    setSelectedSign(sign);
    fetchHoroscope(sign);
  };

  const handleBackClick = () => {
    setSelectedSign(null);
    setHoroscope(null);
  };

  const handleLanguageSwitch = () => {
    const newLang = locale === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
    setLocale(newLang);
    if (selectedSign) {
      setSelectedSign(null);
    }
  };

  return (
    <div className="App">
      <header>
        <button onClick={handleLanguageSwitch}>
          {locale === "en" ? t("switchToRussian") : t("switchToEnglish")}
        </button>
        {selectedSign && (
          <button onClick={handleBackClick}>{t("back")}</button>
        )}
      </header>
      {selectedSign ? (
        <div className="modal" ref={modalRef}>
          <h2>{t(`zodiac.${selectedSign}.name`)}</h2>
          <p>{horoscope}</p>
          <button onClick={handleBackClick}>{t("back")}</button>
        </div>
      ) : (
        <ZodiacList onSignClick={handleSignClick} />
      )}
    </div>
  );
}

export default App;
