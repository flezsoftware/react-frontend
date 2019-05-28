import  hocEdit from './crud/Edit.js';
import UserView from '../users/UserView.js';
import {withTranslation} from 'react-i18next';
import DataSource from "../users/DataSource";

 async function selectData(DataSource, props){
     const {match: {params}} = props;
     const restUser = await DataSource.getUser(params.id);
     return  restUser;
 }

const EditUserHoc = hocEdit(UserView,selectData,'/user','/user' ,'/users');

export default withTranslation()(EditUserHoc);