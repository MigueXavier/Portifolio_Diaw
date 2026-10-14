import { useState } from "react";
import { useT } from "../i18n/useT";

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function ContactScreen() {
  const { t } = useT();
  const [status, setStatus] = useState("idle"); 

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

   
    if (data.get("website")) {
      setStatus("success");
      return;
    }
    if (!ACCESS_KEY) {
      console.error("Defina VITE_WEB3FORMS_KEY no arquivo .env.local");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfólio: mensagem de ${data.get("name")}`,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const result = await response.json();
      if (result.success) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>{t("sections.mensage")}</h1>
        <p>{t("contact.intro")}</p>

        <label>
          {t("contact.name")}
          <input name="name" type="text" required maxLength={100} autoComplete="name" />
        </label>

        <label>
          {t("contact.email")}
          <input name="email" type="email" required maxLength={150} autoComplete="email" />
        </label>

        <label>
          {t("contact.message")}
          <textarea name="message" required maxLength={2000} />
        </label>

        <input name="website" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? t("contact.sending") : `${t("contact.send")} ▶`}
        </button>

        {status === "success" && (
          <div className="contact-status success" role="status">{t("contact.success")}</div>
        )}
        {status === "error" && (
          <div className="contact-status error" role="alert">{t("contact.error")}</div>
        )}
      </form>
    </main>
  );
}