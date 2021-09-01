import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Upload, Space, Tabs, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

const { Dragger } = Upload;

function DraggerComprobantes({ comprobantesDe, descripcion, style }) {
  const props = {
    name: "file",
    style,
    multiple: true,
    action: "/api/hello",
    method: "GET",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">{comprobantesDe}</p>
      <p className="ant-upload-hint" style={{ padding: 10 }}>
        {descripcion}
      </p>
    </Dragger>
  );
}

function Servicios() {
  return (
    <Space direction="vertical">
      <DraggerComprobantes
        descripcion="Arrastre aqui comprobantes de alquiler"
        comprobantesDe="Alquiler"
        style={{
          minWidth: 300,
        }}
      />
      <DraggerComprobantes
        descripcion="Arrastre aqui comprobantes de expensas"
        comprobantesDe="Expensas"
        style={{
          minWidth: 300,
        }}
      />
      <DraggerComprobantes
        descripcion="Arrastre aqui comprobantes de edenor"
        comprobantesDe="Edenor"
        style={{
          minWidth: 300,
        }}
      />
      <DraggerComprobantes
        descripcion="Arrastre aqui comprobantes de metrogras"
        comprobantesDe="Metrogas"
        style={{
          minWidth: 300,
        }}
      />
    </Space>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Comprobantes</title>
        <meta name="description" content="Comprobantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: 20 }}>
        <Tabs tabPosition="left" defaultActiveKey="1">
          <TabPane tab="Julio" key="1">
            <Servicios />
          </TabPane>
          <TabPane tab="Agosto" key="2">
            <Servicios />
          </TabPane>
          <TabPane tab="Septiembre" key="3">
            <Servicios />
          </TabPane>
        </Tabs>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
