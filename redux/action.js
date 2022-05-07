export const ADD_TODO = "ADD_TODO";

export const addTodo = (data) => {
     return {
          type:ADD_TODO,
          payload:data,
     };
};

export const getTodos = () => async (dispatch) => {
     const data = await fetch("http://localstorage8080");
     dispatch(addTodo(data));
}