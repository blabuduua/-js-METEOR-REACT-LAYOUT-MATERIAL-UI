export const addToCart = (product) => {
    Meteor.call('cartInsert', product);
};
export const removeFromCart = (id) => {
    Meteor.call('cartRemove', id);
};
export const quantityUpdate = (id, value) => {
    Meteor.call('cartUpdate', id, value)
};

export const simple = () => {
    return new Promise((resolve, reject) => {
        Meteor.call('simple', null, (error, result) => {
            if (error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })
};




