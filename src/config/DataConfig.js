class ConfigData {
    app_mode = 'stage';
    Data ={
        'stage':{
            'url':""
        },
        'prod':{
            'url':""
        }
    }

    constructor() {

    }

    get_data = (key) =>{
        let value;
        if(this.Data[this.app_mode][key] === undefined){
            value = null;
        }else {
            value = this.Data[this.app_mode][key];
        }
        return value;
    }

    setData = (key, value) => {
        this.Data[this.app_mode][key] = value;
    }
}

export default ConfigData;