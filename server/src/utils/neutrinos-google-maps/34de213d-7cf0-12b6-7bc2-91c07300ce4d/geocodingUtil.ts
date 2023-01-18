const {Client} = require("@googlemaps/google-maps-services-js");
const client = new Client({});
export class geocodingUtil {
    constructor() {

    }

    getGeocode(configObj,params){
        params.key=configObj.googleAPIKey
        return client.geocode({params:params}).then(result=>{
            return result.data
        }).catch(err=>{
            return err;
        })
    }

    async getElevation(configObj,params){
        params.key=configObj.googleAPIKey
        return client.elevation({params: params}).then(result=>{
            return result.data
        }).catch(err=>{
            return err;
        })
    }

    distanceMatrix(configObj,params){
        params.key=configObj.googleAPIKey;
        return client.distancematrix({params: params}).then(result=>{
            return result.data
        }).catch(err=>{
            return err;
        })
    }

    getDirections(configObj,params){
        params.key=configObj.googleAPIKey;
        return client.directions({params: params }).then(result=>{
            return result.data
        }).catch(err=>{
            return err;
        })
    }

    getPlaces(configObj,params){
        params.key=configObj.googleAPIKey;
        return client.findPlaceFromText({params: params}).then(result=>{
            return result.data
        }).catch(err=>{
            return err;
        })
    }

    getRoads(configObj,params){
        params.key=configObj.googleAPIKey;
        return client.nearestRoads({params: params}).then(result=>{
            return result.data
        }).catch(err=>{
            return err;
        })
    }
}

