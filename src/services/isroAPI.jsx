import axios from 'axios';

/* axios.defaults.baseURL = 'https://api.m3o.com/v1/user'; */
//const key = "ODUxZDZhNmQtOTZiMC00ZmViLTk0ZTYtYTc3NDZhNzRmOWNj";

/* const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
}; */

export async function fetchAPI() {
  
  const { data } = await axios.get(`https://isro.vercel.app/api/customer_satellites`);
  /* console.log(data.customer_satellites) */

  //Додаєм нові влстивості до масиву
   let array = [...data.customer_satellites]
  for (let item = 0; item < array.length; item++) {
    const time = new Date()
    time.setHours(item, item+1)
    array[item].time = time //Додаєм нову властивість time
    /* console.log("(item",item) */
    if (0 === item%3 ) {
     array[item].status="Проведен"  //Додаєм нову властивість status
     array[item].comment="Вентиляция налажена"//Додаєм нову властивість comment
    }
    if (1 === item%3 ) {
      array[item].status="Удалить"  //Додаєм нову властивість status
      array[item].comment="Создан ошибочно"//Додаєм нову властивість comment
     }
     if (2 === item%3 ) {
      array[item].status="Записан"  //Додаєм нову властивість status
      array[item].comment="Аппарат исправлен"//Додаєм нову властивість comment
     }
    /* console.log("array",2 === item%3) */
  }
 /*  console.log("array",array) */
  return data;
}
/* export async function fetch() {
  const { data } = await axios.get(`/alone-1435`);
  console.log(data)
  return data;
}
 */
/* export async function addContacts(createContact) {
  const { data } = await axios.post(`/contacts`, createContact);
  return data;
}

export async function deleteContacts(contactsID) {
  const { data } = await axios.delete(`/contacts/${contactsID}`);

  return data;
}

export async function registerUser(credentials) {
  const data = await axios.post('/users/signup', credentials);
  token.set(data.data.token);

  return data;
}

export async function loginUser(credentials) {
  const data = await axios.post('/users/login', credentials);
  token.set(data.data.token);
  //console.log(data.data.token);
  return data;
}

export async function logOutUser() {
  await axios.post('/users/logout');
  token.unset();
}

export async function currentUser(currentToken) {
  //console.log(currentToken);
  token.set(currentToken);
  const data = await axios.get('/users/current');

  return data;
} */
