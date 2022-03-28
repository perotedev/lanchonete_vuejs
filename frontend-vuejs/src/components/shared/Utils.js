export class Utils {
    static addItemToCart (cookie, item){
        let array = Utils.getCookieItem(cookie, 'appCart');
        if (array == undefined || array == null){
            Utils.setCookieItem(cookie, 'appCart', [item]);
        } else {
            Utils.addCookieItem(cookie, 'appCart', item);
        }
    }

    static getItemsCart(cookie){
        return JSON.parse(Utils.getCookieItem(cookie, 'appCart'));
    }

    static clearCart(cookie){
        cookie.remove('appCart');
    }

    static setCookieItem(cookie, key, item){
        cookie.set(key, JSON.stringify(item));
    }

    static addCookieItem(cookie, key, item){
        let array = Utils.getCookieItem(cookie, key);
        let jsonArray = JSON.parse(array);
        console.log(JSON.parse(array));
        jsonArray.push(JSON.stringify(item));
        Utils.setCookieItem(cookie ,key, JSON.stringify(jsonArray));
    }
    
    static removeItemCookieList(cookie, key, item){
        let array = Utils.getCookieItem(key);
        let jsonArray = JSON.parse(array);

        jsonArray.forEach((element, index) => {
            if (element.id == item.id){
                delete jsonArray[key][index];
                return true;
            }
        });

        Utils.setCookieItem(cookie, key, JSON.stringify(jsonArray[key]));
    }

    static getCookieItem(cookie, key){
        return cookie.get(key);
    }

    static removeCookieItem(cookie, key){
        cookie.remove(key);
    }
}