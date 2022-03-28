import jsCookie from 'js-cookie'

export class Utils {
    static addItemToCart (item){
        let coockie = Utils.getCookieItem('appCart');
        if (coockie == undefined || coockie == null){
            Utils.setCookieItem('appCart', [item]);
        } else {
            Utils.addCookieItem('appCart', item);
        }
    }

    static getItemsCart(){
        return JSON.parse(Utils.getCookieItem('appCart'));
    }

    static clearCart(){
        jsCookie.remove('appCart');
    }

    static setCookieItem(key, item){
        jsCookie.set(key, JSON.stringify(item));
    }

    static addCookieItem(key, item){
        let coockie = Utils.getCookieItem(key);
        let jsonArray = JSON.parse(coockie);
        jsonArraykey.push(JSON.stringify(item));
        Utils.setCookieItem(key, JSON.stringify(jsonArray));
    }
    
    static removeItemCookieList(key, item){
        let coockie = Utils.getCookieItem(key);
        let jsonArray = JSON.parse(coockie);

        jsonArray.forEach((element, index) => {
            if (element.id == item.id){
                jsonArray.splice(index, 1);
                return true;
            }
        });

        Utils.setCookieItem(key, JSON.stringify(jsonArray));
    }

    static getCookieItem(key){
        return jsCookie.get(key);
    }

    static removeCookieItem(key){
        jsCookie.remove(key);
    }
}