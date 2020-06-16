import axios from 'axios';
import { changeTitle, capitalize } from 'src/utils';
import {
  GET_RANDOM_JOBWORKER,
  saveRandomJobWorker,
  SUBMIT_LOGIN,
  saveUser,
  GET_SIX_RANDOM_JOBWORKER,
  saveSixJobWorker,
  hideLoader,
  GET_JOBWORKER,
  saveJobWorker,
  GET_USER_DATA,
  saveJobWorkerDetail,
  GET_JOBWORKER_DETAIL,
  saveJobWorkerRating,
  GET_JOBWORKER_RATING,
  SUBMIT_EDIT,
  saveEdit,
  SUBMIT_DELETE,
  deleteAccount,
  GET_JOBWORKER_SKILLS,
  saveJobWorkerSkills,
  SUBMIT_NEW_SKILL,
  SUBMIT_DELETE_SKILL,
  SUBMIT_EDIT_SKILL,
  saveUrlAvatar,
  GET_URL_AVATAR,
  SUBMIT_AVATAR,
  isSkillSave,
  saveErrorConnexion,
  GET_JOBWORKER_SERVICE,
  saveJobWorkerService,
  errorPasswordMessage,
} from '../action/usersActions';
import { saveToggle } from '../action/requestAction';


const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_RANDOM_JOBWORKER:
      // REQUEST TO GET A RANDOM JOBWORKER FOR THE HOMEPAGE 

      // console.log('coucou je suis get_random_jobworker');
      axios.get('http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users/jobworker/random')
        .then((response) => {
        
          // dispatch the action
          store.dispatch(saveRandomJobWorker(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    case SUBMIT_LOGIN: {
      // REQUEST TO SAVE THE NEW USER WITH  SIGN IN 
      const { email, password } = store.getState().user;
      // console.log(email);
      // console.log(password);
      axios({
        method: 'post',
        url: 'http://ec2-18-204-19-53.compute-1.amazonaws.com/api/login_check',
        data: {
          // give the necessary data for the request
          username: email,
          password,
        },
      })
        .then((response) => {
          console.log(response);
          // dispact the action saveUser to the reducer
          store.dispatch(saveUser(response.data.user));
          // dispatch the action saveUrlAvatar to reducer
          store.dispatch(saveUrlAvatar(response.data.image));
          // we stock the jwtToken in the localStorage
          window.localStorage.setItem('jwtToken', response.data.token);
          // we stock the user id in the localStorage
          window.localStorage.setItem('userId', response.data.user.id);
          // we stock the user Role in the localstorage
          window.localStorage.setItem('userRole', response.data.user.roles);
        })
        .catch((error) => {
          console.warn(error);
          // DISPATCH for save in state an error to make an conditionnal display
          store.dispatch(saveErrorConnexion(error.response.data));
        });
      next(action);
      break;
    }
    case GET_USER_DATA: {
      // REQUEST TO SAVE THE CURRENT USER DATA 

      // we take the necessary data in the localStorage
      const userToken = localStorage.getItem('jwtToken');
      axios({
        method: 'get',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users/`,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          // we dispacth saveUser action to the reducer
          store.dispatch(saveUser(response.data));
          // dispatch the action saveUrlAvatar to reducer
          store.dispatch(saveUrlAvatar(response.data.image));
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        });
      next(action);
      break;
    }

    case GET_SIX_RANDOM_JOBWORKER: {
      // REQUEST TO SAVE SIX JOBWORKER AFFILIATED TO A SERVICE

      const { serviceName, serviceList } = store.getState().service;
      // console.log(serviceName);
      // console.log(changeTitle(serviceName));
      // console.log(serviceList);
      const findService = serviceList.find(service => service.title === capitalize(changeTitle(serviceName)));
      // console.log(findService);
      const serviceId = Number(findService.id);
      // console.log(serviceId);

      axios.get(`http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/services/${serviceId}/jobworker?limit=6`)
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          store.dispatch(saveSixJobWorker(response.data[0].skills));
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        })
        .finally(() => {
          store.dispatch(hideLoader());
        });
      next(action);
      break;
    }
    case GET_JOBWORKER: {

      // REQUEST TO SAVE ALL JOBWORKER AFFILIATED TO A SERVICE 

      const { serviceName, serviceList } = store.getState().service;
      // console.log(serviceName);
      // console.log(changeTitle(serviceName));
      // console.log(serviceList);
      const findService = serviceList.find(service => service.title === capitalize(changeTitle(serviceName)));
      // console.log(findService);
      const serviceId = Number(findService.id);
      // console.log(serviceId);

      axios.get(`http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/services/${serviceId}/jobworker/rating`)
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          console.log(`retour du middle  ${response.data[0].skills}`);
          // dispatch saveJobWorker action in userReducer
          store.dispatch(saveJobWorker(response.data[0].skills));
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        })
        .finally(() => {
        });
      next(action);
      break;
    }
    case GET_JOBWORKER_DETAIL: {
      // REQUEST TO GET THE DETAIL OF THE CURRENTJOBWORKER

      const { currentJobWorkerId } = store.getState().user;
      axios.get(`http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users/jobworker/${currentJobWorkerId}`)
        .then((response) => {
        // console.log(response);
        // je voudrais enregistrer response.data dans le state => nouvelle action
        // console.log(response);
          store.dispatch(saveJobWorkerDetail(response.data));
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        });
      next(action);
      break;
    }
    case GET_JOBWORKER_RATING: {
      // REQUEST TO GET THE RATING OF THE CURRENTJOBWORKER

      const { currentJobWorkerId } = store.getState().user;
      console.log(currentJobWorkerId);
      axios.get(`http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users/jobworker/${currentJobWorkerId}/rating`)
        .then((response) => {
        // console.log(response);
        // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          store.dispatch(saveJobWorkerRating(response.data));
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
          store.dispatch(saveJobWorkerRating(null));
        });
      next(action);
      break;
    }
    case SUBMIT_EDIT: {
      // REQUEST TO SAVE THE EDIT OF THE USER DATA
      const userToken = localStorage.getItem('jwtToken');
      let { editEmail, editPassword, department, password, editAbout, userData, urlAvatar } = store.getState().user;
      // const { departmentId } = store.getState().user.userData.department.id;
      // console.log(departmentId);
      console.log(editEmail);
      // console.log(editDepartments);
      console.log(editPassword);
      console.log(editAbout);
      console.log(urlAvatar);
      axios({
        method: 'PUT',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users`,
        data: {
          email: editEmail,
          password: editPassword,
          department: department,
          about: editAbout,
          image: urlAvatar,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          // const { token } = response.data;
          console.log(response.data.token);
          if (response.data.token !== null) {
            localStorage.removeItem('jwtToken');
            localStorage.setItem('jwtToken', response.data.token);
          }
          store.dispatch(saveEdit(response.data));
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response.data);
          console.log('jai fait une erreur');
          store.dispatch(errorPasswordMessage());
        });
      next(action);
      break;
    }
    case SUBMIT_DELETE: {
      // REQUEST TO DELETE USER'S ACCOUNT
      const userToken = localStorage.getItem('jwtToken');
      axios({
        method: 'DELETE',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users`,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          store.dispatch(deleteAccount());
          localStorage.getItem('jwtToken');
          localStorage.removeItem('userId');
          localStorage.removeItem('userRole');
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        });
      next(action);
      break;
    }
    case GET_JOBWORKER_SKILLS: {
      // REQUEST TO GET THE SKILL OF THE CURRENT JOBWORKER
      const userToken = localStorage.getItem('jwtToken');
      const id = localStorage.getItem('userId');
      const { toggle } = store.getState().request;
      axios({
        method: 'get',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users/jobworker_${id}`,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          if (!response.data) {
            store.dispatch(saveJobWorkerSkills([]));
          }
          else {
            store.dispatch(saveJobWorkerSkills(response.data.skills));
          }
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        });
      next(action);
      break;

    }
    case SUBMIT_NEW_SKILL: {

      // REQUEST FOR ADD A NEW SKILL TO THE CURRENT JOBWORKER

      // we get all the necessary data for the request from localStorage and state
      const userToken = localStorage.getItem('jwtToken');
      const { selectedSkillId, selectedSkillPrice, selectedSkillDescription } = store.getState().user;
      const { serviceList } = store.getState().service;
      const price = Number(selectedSkillPrice);
      const { toggle } = store.getState().request;
      // console.log(`${selectedSkillId}+${selectedSkillPrice}+${selectedSkillDescription}+`);
      // console.log(price);
      // get the current id skill with a find function 
      const selectedSkillIdByName = serviceList.find(service => service.title === selectedSkillId);
      //  console.log(selectedSkillIdByName);
      const serviceId = selectedSkillIdByName.id;
      axios({
        method: 'POST',
        url: 'http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/skills',
        data: {
          description: selectedSkillDescription,
          price,
          service: serviceId,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          store.dispatch(saveToggle(!toggle));
          store.dispatch(isSkillSave());
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          // store.dispatch(saveJobWorkerSkills(response.data.skills));
        })
        .catch((error) => {
          console.warn(error);
          console.log(error.response);
        });
      next(action);
      break;
    }
    case SUBMIT_DELETE_SKILL : {

      const userToken = localStorage.getItem('jwtToken');
      const { skillId } = store.getState().user;
      const { toggle } = store.getState().request;
      console.log(skillId);
      axios({
        method: 'DELETE',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/skills/${skillId}`,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          store.dispatch(saveToggle(!toggle));
          store.dispatch(isSkillSave());
          // store.dispatch(saveJobWorkerSkills(response.data.skills));
        })
        .catch((error) => {
          console.warn(error);
         
          console.log('jai fait une erreur');
        });
      next(action);
      break;
    }
    case SUBMIT_EDIT_SKILL: {
      const userToken = localStorage.getItem('jwtToken');
      const { skillId, selectedSkillPrice, selectedSkillDescription } = store.getState().user;
      const { toggle } = store.getState().request;
      axios({
        method: 'PUT',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/skills/${skillId}`,
        data: {
          description: selectedSkillDescription,
          price: selectedSkillPrice,
        },
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          store.dispatch(saveToggle(!toggle));
          store.dispatch(isSkillSave());
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          // store.dispatch(saveJobWorkerSkills(response.data.skills));
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        });
      next(action);
      break;
    }
    case SUBMIT_AVATAR: {
      const{ avatarData } = store.getState().user;
      console.log(avatarData);
      const data = new FormData();
      data.append('file', avatarData);
      data.append('upload_preset', 'friendlyjob');
      axios({
        method: 'POST',
        url: 'https://api.cloudinary.com/v1_1/friendlyjob/image/upload',
        data,
      })
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          store.dispatch(saveUrlAvatar(response.data.secure_url));
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        });
        next(action);
        break;
    }
    case GET_JOBWORKER_SERVICE: {
      const userToken = localStorage.getItem('jwtToken');
      console.log(userToken);
      axios({
        method: 'get',
        url: `http://ec2-18-204-19-53.compute-1.amazonaws.com/api/v1/users/jobworker/skill/select`,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          // console.log(response);
          // je voudrais enregistrer response.data dans le state => nouvelle action
          console.log(response);
          // we dispacth saveUser action to the reducer
          store.dispatch(saveJobWorkerService(response.data));
        })
        .catch((error) => {
          console.warn(error);
          console.log('jai fait une erreur');
        });
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default userMiddleware;
