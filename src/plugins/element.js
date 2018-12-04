import Vue from 'vue';

import {
  Container,
  Header,
  Aside,
  Main,
  Row,
  Col,
  Loading,
  Card,
  Table,
  TableColumn,
  Button,
  Menu,
  MenuItem,
  Submenu,
  Notification,
  Message,
  Form,
  FormItem,
  Input,
  Cascader,
} from 'element-ui';

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);
Vue.use(Loading);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Cascader);

Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
