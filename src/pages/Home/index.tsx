import React from "react";
import styles from "./index.module.less";
import { Card } from "antd";
import {Link,history} from "umi";

const token = {
  colorBgContainer: "#ffffff",
  boxShadow: `
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 1px 1px -4px rgba(0, 0, 0, 0.12),
    0 2px 12px 2px rgba(0, 0, 0, 0.05)`,
  infoBoxShadow: `0 6px 16px 0 rgba(0, 0, 0, 0.08)`,
  colorTextSecondary: "rgba(0, 0, 0, 0.65)",
  colorText: "rgba(0, 0, 0, 0.88)",
};

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: string;
  index: number;
  desc: string;
  href: string;
}> = ({ title, href, index, desc }) => {

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.infoBoxShadow,
        borderRadius: "8px",
        fontSize: "14px",
        color: token.colorTextSecondary,
        lineHeight: "22px",
        padding: "16px 19px",
        minWidth: "220px",
        flex: 1,
        height: 170,
      }}
      className={styles.infoCard}
      onClick={() => history.push(href)}
    >
      <div
        style={{
          display: "flex",
          gap: "4px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: "22px",
            backgroundSize: "100%",
            textAlign: "center",
            padding: "8px 16px 16px 12px",
            color: "#FFF",
            fontWeight: "bold",
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: "16px",
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: "14px",
          color: token.colorTextSecondary,
          textAlign: "justify",
          lineHeight: "22px",
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <Link to={href}>了解更多 {">"}</Link>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className={styles.homePage}>
        <h1>欢迎使用花椒BI</h1>
        <Card
          style={{
            borderRadius: 8,
            boxShadow: token.boxShadow,
            marginTop:20,
            height: 400,
            backgroundImage:
              "background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)",
          }}
        >
          <div
            style={{
              backgroundPosition: "100% -30%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "274px auto",
              backgroundImage:
                "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                color: "#000",
              }}
            >
              欢迎使用 <b>花椒BI</b>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: token.colorTextSecondary,
                lineHeight: "22px",
                marginTop: 16,
                marginBottom: 32,
                width: "65%",
              }}
            >
              本站是一个智能BI系统，提供了丰富的数据分析和可视化功能，能帮助您深入了解业务数据并发现有价值的见解。
              <br />
              本站的主旨是将数据变成有意义的见解！！！
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <InfoCard
                index={1}
                href="/analyze"
                title="智能分析"
                desc="智能分析借助通义AI进行表格数据分析，并生成文本。您可以上传excel、txt等格式的文件，接下来的事就交给AI吧~"
              />
              <InfoCard
                index={2}
                title="我的图表"
                href="/mychart"
                desc="本站将会保存您前50条生成的图表信息，小站资源有限，还请谅解~"
              />
              {/* <InfoCard
                index={3}
                title="了解 Pro Components"
                href="https://procomponents.ant.design"
                desc="ProComponents 是一个基于 Ant Design 做了更高抽象的模板组件，以 一个组件就是一个页面为开发理念，为中后台开发带来更好的体验。"
              /> */}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
