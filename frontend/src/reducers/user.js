
const initialState = {
  // ici l'état initial
  /** contenu du champ e-mail */
  email: '',
  /** contenu du champ password */
  password: '',
  /** indique si l'utilisateur est loggué */
  isLogged: false,
  /** informations de l'utilisateur */
  userData: null,
  /** Token  */
  token: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default userReducer;
