var throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
};

const LOCALSTORAGE_KEY = "feedback-form-state";

const formData = {};

// localStorage.removeItem(LOCALSTORAGE_KEY);

onPageOpen();

refs.form.addEventListener("input", throttle(onInputTyping, 500));
refs.form.addEventListener("submit", onFormSubmit);

function onPageOpen() {
    const previousInputValue = localStorage.getItem(LOCALSTORAGE_KEY);

    if (previousInputValue) {
        const previousInputValueParsed = JSON.parse(previousInputValue);

        if (previousInputValueParsed.email) {
            refs.email.value = previousInputValueParsed.email;
            formData.email = previousInputValueParsed.email;
        }
        else {
            refs.email.value = "";
        };

        if(previousInputValueParsed.message) {
            refs.textarea.value = previousInputValueParsed.message;
            formData.textarea = previousInputValueParsed.message;
        }
        else {
            refs.textarea.value = ""; 
        };
    };
};

function onInputTyping(evt) {
    
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) {
    evt.preventDefault();

    const formValues = localStorage.getItem(LOCALSTORAGE_KEY);
    
    if (formValues) {
        console.log(JSON.parse(formValues));
    };

    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}