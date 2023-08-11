import firebase from "../Config/firebase";

export async function registerFirebase(data) {
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    try {
        console.log("responseUser: ", responseUser)
        if (responseUser.user.uid) {
            const document = await firebase.firestore().collection("usuarios").add({
                name: data.name,
                lastname: data.lastname,
                email: data.email,
                userId: responseUser.user.uid
            })
        }
    }
    catch (error) {
        console.log("ERROR:", error)
    }

    return document
}

export async function logIn(data) {
    const responseUser = await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    try {
        console.log("Response User", responseUser)
        if (responseUser.user.uid) {
            const document = await firebase.firestore().collection("usuarios").where("userId", "==", responseUser.user.uid).get()
            return document.docs[0].data()
        }
        return {}
    }
    catch (error) {
        console.log("ERROR", error)
    }

}

export async function upProduct(data) {
    const responseProduct = await firebase.firestore().collection("products").add({
        title: data.title,
        price: data.price,
        description: data.description,
        thumbnail: data.thumbnail,
        userId: data.userId
    })
}

export async function getAllFirebase() {
    return await firebase.firestore().collection("products").get()
}

export async function getProductByIdFirebase(id) {
    return await firebase.firestore().doc(`products/${id}`).get()
}

export async function editProductById({ id, title, price, thumbnail, description }) {
    return await firebase.firestore().doc(`products/${id}`).set({ title: `${title}`, price: `${price}`, description: `${description}`, thumbnail: `${thumbnail}` })
}

export async function deleteProductById(id) {
    return await firebase.firestore().doc(`products/${id}`).delete()
}