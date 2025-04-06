const Radians = (degrees: number): number => { return degrees * Math.PI / 180; }
export class GeoLocationUtils {    
    static Distance (latitude1: number, longitude1: number, latitude2: number, longitude2: number): number {
             const earthRadius = 6371;
             const dLat = Radians(latitude2 - latitude1)
             const dLon = Radians(longitude2 - longitude1)
             const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(Radians(latitude1)) * Math.cos(Radians(latitude2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
             const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
             const distanceInBetween = earthRadius * c            
            return distanceInBetween        
    }

    static IsWithinRadius(latitude1: number, longitude1: number, latitude2: number, longitude2: number, radiusInMiles: number): boolean {
        return GeoLocationUtils.Distance(latitude1, longitude1, latitude2, longitude2) <= radiusInMiles
    }

    /** 
     * position.coords
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GeolocationPosition/coords) 
     * interface GeolocationCoordinates {
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GeolocationCoordinates/accuracy)
     * readonly accuracy: number;
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GeolocationCoordinates/altitude) 
     * readonly altitude: number | null;
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GeolocationCoordinates/altitudeAccuracy) 
     * readonly altitudeAccuracy: number | null;
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GeolocationCoordinates/heading)
     * readonly heading: number | null;
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GeolocationCoordinates/latitude)
     * readonly latitude: number;
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GeolocationCoordinates/longitude) 
     * readonly longitude: number;
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/GeolocationCoordinates/speed) 
     * readonly speed: number | null;}
    */
    static GetCurrentLocation(callBack: (position?: GeolocationPosition) => void) {
        try{
            if (!navigator){
                return callBack()
            }
        }catch {
            return callBack()
        }
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(callBack);
        } else {
            callBack()
        }
    }
}