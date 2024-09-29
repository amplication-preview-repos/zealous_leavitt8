import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PostgreSqlRecordList } from "./postgreSqlRecord/PostgreSqlRecordList";
import { PostgreSqlRecordCreate } from "./postgreSqlRecord/PostgreSqlRecordCreate";
import { PostgreSqlRecordEdit } from "./postgreSqlRecord/PostgreSqlRecordEdit";
import { PostgreSqlRecordShow } from "./postgreSqlRecord/PostgreSqlRecordShow";
import { KafkaMessageList } from "./kafkaMessage/KafkaMessageList";
import { KafkaMessageCreate } from "./kafkaMessage/KafkaMessageCreate";
import { KafkaMessageEdit } from "./kafkaMessage/KafkaMessageEdit";
import { KafkaMessageShow } from "./kafkaMessage/KafkaMessageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"MessageProcessor"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PostgreSqlRecord"
          list={PostgreSqlRecordList}
          edit={PostgreSqlRecordEdit}
          create={PostgreSqlRecordCreate}
          show={PostgreSqlRecordShow}
        />
        <Resource
          name="KafkaMessage"
          list={KafkaMessageList}
          edit={KafkaMessageEdit}
          create={KafkaMessageCreate}
          show={KafkaMessageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
