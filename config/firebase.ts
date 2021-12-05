const devConfig = {
   
};

const prodConfig = {

};

export default process.env.NODE_ENV === "production" ? prodConfig : devConfig;