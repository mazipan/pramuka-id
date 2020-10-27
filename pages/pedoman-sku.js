import React from "react";
import Expansion from "../components/Expansion-panels";
import Layout from "../components/MainLayout";
import MetaHead from "../components/MetaHead";
import ChapterNavigation from "../components/ChapterNavigation";
import ChapterTitle from "../components/ChapterTitle";
import PedomanSkuData from "../data/pedoman-sku";
import { BASE_PATH } from "../constants";

const title = "Pedoman SKU | Buku Saku Pramuka Digital";
const desc =
  "Baca pedoman umum untuk menyelesaikan SKU di Buku Saku Pramuka Digital";
const url = BASE_PATH + "/pedoman-sku/";

function PedomanSkuPage() {
  return (
    <Layout>
      <MetaHead title={title} desc={desc} url={url} />
      <ChapterNavigation nextLink="/morse/" />
      <ChapterTitle subTitle="Pedoman SKU" title="Materi Pramuka" />
      {PedomanSkuData.map((section, index) => (
        <Expansion
          key={index}
          i={index}
          title={section.typeDetail}
          value={section.data.map((step, indexStep) => (
            <li key={step.title}>
              <p className="font-bold">
                {indexStep + 1}. {step.title}
              </p>
              <p className="ml-4 mb-4 mt-2 text-base">
                Artinya: {step.meaning}
              </p>
            </li>
          ))}
        />
      ))}
      {/* ahhhh */}
      {/* <div className="text-left"></div> */}
      <ChapterNavigation nextLink="/morse/" />
    </Layout>
  );
}

export function reportWebVitals({ id, name, label, value }) {
  ga("send", "event", {
    eventCategory:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    eventAction: name,
    eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default PedomanSkuPage;
