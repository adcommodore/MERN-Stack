import React, { useReducer } from  'react';

const Form = {
    firstName: {
    value: '',
    error: null
    },
    lastName: {
    value: '',
    error: null
    },
    email: {
    value: '',
    error: null
    },
    formSubmitted: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIRSTNAME_VALUE":
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    value: action.payload
                }
            }
        case "SET_FIRSTNAME_ERROR":
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    value: action.payload
                }
            }
        case "SET_LASTNAME_VALUE":
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                    value: action.payload
                }
            }
        case "SET_LASTNAME_ERROR":
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                    value: action.payload
                }
            }
        case "SET_EMAIL_VALUE":
            return {
                ...state,
                email: {
                    ...state.email,
                    value: action.payload
                }
            }
            case "SET_EMAIL_ERROR":
                return {
                    ...state,
                    email: {
                        ...state.email,
                        error: action.payload
                    }
                }
        default:
            return state;
    }
};

 
export default Form;