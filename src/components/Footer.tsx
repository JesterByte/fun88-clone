import type { ReactNode } from "react";
import SponsorTicker from "./SponsorTicker";

export default function Footer() {
  return (
    <footer className="bg-[#031f2e] text-[#4cc3ff] text-sm mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <FooterColumn title="INFORMATION">
            <FooterLink text="About Us" />
            <FooterLink text="Terms and Conditions" />
            <FooterLink text="Responsible Gambling" />
            <FooterLink text="Privacy Notice" />
            <FooterLink text="Affiliate Program" />
          </FooterColumn>

          <FooterColumn title="OUR SECTIONS">
            <FooterLink text="Sports" />
            <FooterLink text="Games" />
            <FooterLink text="Promotions" />
            <FooterLink text="Sponsors" />
          </FooterColumn>

          <FooterColumn title="HELP">
            <FooterLink text="Frequently Asked Questions" />
            <FooterLink text="Deposit" />
            <FooterLink text="Withdraw" />
            <FooterLink text="Refund Policy" />
          </FooterColumn>

          <FooterColumn title="CONTACT">
            <FooterLink text="Contact" />
          </FooterColumn>
        </div>

        <div className="flex gap-4 justify-left">
          <img src="/icons/logo/app_store.webp" className="h-10" />
          <img src="/icons/logo/android.webp" className="h-10" />
        </div>
        <p className="text-center text-xs opacity-70">
          {[
            "Fun88 Vietnam",
            "Fun88 Vietnam 1",
            "Fun88 Vietnam EN",
            "Fun88 Thailand",
            "Fun88 Thailand 1",
            "Fun88 Thailand EN",
            "Fun88 China",
            "Fun88 Mexico",
            "Fun88 Chile",
            "Fun88 Argentina",
            "Fun88 Paraguay",
            "Fun88 India",
            "Fun88 Global",
          ].map((item, index, array) => {
            return index === array.length - 1 ? `${item}` : `${item} | `;
          })}
        </p>

        <div className="flex justify-center gap-2">
          {["telegram", "instagram", "facebook", "x", "tiktok", "youtube"].map(
            (icon) => (
              <img
                key={icon}
                src={`/icons/social/${icon}.webp`}
                className="h-12 opacity-80 hover:opacity-100"
              />
            ),
          )}
        </div>

        <div className="flex justify-center">
          <img
            src="/icons/logo/newcastle.webp"
            alt="New Caslte"
            className="h-12"
          />
        </div>

        <SponsorTicker />

        <div className="flex justify-center h-8 gap-4">
          <img
            src="/icons/logo/gordon_moody_logo.webp"
            alt="Gordon Moody Logo"
          />
          <img src="/icons/logo/plus_18_logo.webp" alt="18+ Logo" />
          <img src="/icons/logo/ssl.webp" alt="SSL Logo" />
        </div>

        <p className="text-center text-[10px] opacity-50 leading-relaxed">
          WWW.FUN88MX.MX OPERATED IN MEXICO BY PRODUCCIONES MÓVILES S.A. DE
          C.V., HOLDER OF PERMIT DGAJS/SCEVF/P-06/2005-TER IN ASSOCIATION WITH
          UNOCAPALI LA PAZ OPERADORA S.A. DE C.V. IN ACCORDANCE WITH OFFICIAL
          DOCUMENTS DGJS/1580/2021 AND DGJS/DCRCA/1424/2022. GAMBLING PROHIBITED
          FOR MINORS, GAMBLE RESPONSIBLY, DO NOT FORGET THAT THE MAIN PURPOSE IS
          RECREATION, ENTERTAINMENT, AND LEISURE.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ text }: { text: string }) {
  return (
    <li className="opacity-80 hover:opacity-100 cursor-pointer">{text}</li>
  );
}
