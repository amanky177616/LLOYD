export const msalConfig = {
  auth: {
    clientId: "",
    authority:
      "https://login.microsoftonline.com/",
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
