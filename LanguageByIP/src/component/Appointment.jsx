import React from "react";
import "./appointment.css";
import { useTranslation } from "react-i18next";

const Appointment = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="randevu" className="appointment">
      <h2>{t("Appointment.message1")}</h2>
      <p>{t("Appointment.message2")}</p>
      <button className="appointment-button">
        {t("Appointment.message3")}
      </button>
    </section>
  );
};

export default Appointment;
