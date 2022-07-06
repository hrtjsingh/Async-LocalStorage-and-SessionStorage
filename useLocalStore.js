import React from 'react'

const useLocalStore = () => {
    const asyncLocalStorage = {
        setItem: function (key, value) {
            return Promise.resolve().then(function () {
                localStorage.setItem(key, value);
            });
        },
        getItem: function (key) {
            return Promise.resolve().then(function () {
                return localStorage.getItem(key);
            });
        }
    };
    const asyncSessionStorage = {
        setItem: function (key, value) {
            return Promise.resolve().then(function () {
                sessionStorage.setItem(key, value);
            });
        },
        getItem: function (key) {
            return Promise.resolve().then(function () {
                return sessionStorage.getItem(key);
            });
        }
    };
    return {
        asyncLocalStorage,
        asyncSessionStorage
    }
}

export default useLocalStore;