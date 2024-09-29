import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { KafkaMessageList } from "./kafkaMessage/KafkaMessageList";
import { KafkaMessageCreate } from "./kafkaMessage/KafkaMessageCreate";
import { KafkaMessageEdit } from "./kafkaMessage/KafkaMessageEdit";
import { KafkaMessageShow } from "./kafkaMessage/KafkaMessageShow";
import { WebhookList } from "./webhook/WebhookList";
import { WebhookCreate } from "./webhook/WebhookCreate";
import { WebhookEdit } from "./webhook/WebhookEdit";
import { WebhookShow } from "./webhook/WebhookShow";
import { PostgreSqlFlowList } from "./postgreSqlFlow/PostgreSqlFlowList";
import { PostgreSqlFlowCreate } from "./postgreSqlFlow/PostgreSqlFlowCreate";
import { PostgreSqlFlowEdit } from "./postgreSqlFlow/PostgreSqlFlowEdit";
import { PostgreSqlFlowShow } from "./postgreSqlFlow/PostgreSqlFlowShow";
import { RedisCacheList } from "./redisCache/RedisCacheList";
import { RedisCacheCreate } from "./redisCache/RedisCacheCreate";
import { RedisCacheEdit } from "./redisCache/RedisCacheEdit";
import { RedisCacheShow } from "./redisCache/RedisCacheShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"MessageReceiver"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="KafkaMessage"
          list={KafkaMessageList}
          edit={KafkaMessageEdit}
          create={KafkaMessageCreate}
          show={KafkaMessageShow}
        />
        <Resource
          name="Webhook"
          list={WebhookList}
          edit={WebhookEdit}
          create={WebhookCreate}
          show={WebhookShow}
        />
        <Resource
          name="PostgreSqlFlow"
          list={PostgreSqlFlowList}
          edit={PostgreSqlFlowEdit}
          create={PostgreSqlFlowCreate}
          show={PostgreSqlFlowShow}
        />
        <Resource
          name="RedisCache"
          list={RedisCacheList}
          edit={RedisCacheEdit}
          create={RedisCacheCreate}
          show={RedisCacheShow}
        />
      </Admin>
    </div>
  );
};

export default App;
