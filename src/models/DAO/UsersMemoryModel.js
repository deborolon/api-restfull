class UsersMemoryModel{
    constructor(){
        this.users = [
            {id: 1, name: 'Laura Martínez', age: 27, email: 'laura.martinez@example.com', username: 'lauram27'},
            {id: 2, name: 'Carlos Pérez', age: 35, email: 'carlos.perez@example.com', username: 'carlosp35'},
            {id: 3, name: 'Daniela Torres', age: 29, email: 'daniela.torres@example.com', username: 'dtorres'},
            {id: 4, name: 'Juan García', age: 24, email: 'juan.garcia@example.com', username: 'juang'}
        ]
    }

    getAllUsers = async () => {
        return this.users
    }

    getUsersById = async (id) => {
        const userById = this.users.find((user) => user.id == id)
        return userById
    }

    postUsers = async (usr) => {
        usr.id = this.users[this.users.length -1].id +1
        this.users.push(usr)
        return usr
    }

    patchUsers = async (id, data) => {
        const index = this.users.findIndex((e) => e.id == id)
        if(index == -1) throw new Error("El índice no existe.")
        const updateUsr = {...this.users[index], ...data}
        this.users.splice(index, 1, updateUsr)
        return updateUsr
    }

    putUsers = async (id, data) => {
        const index = this.users.findIndex((e) => e.id == id)
        if(index == -1) throw new Error("El índice no existe.")
        const updateUsr = {...this.users[index], ...data}
        this.users.splice(index, 1, updateUsr)
        return updateUsr
    }

    deleteUsers = async (id) => {
        const index = this.users.findIndex((e) => e.id == id)
        if(index == -1){
            throw new Error("El índice no existe.")
        } else{
            this.users.splice(index, 1)
            return "El usuario se eliminó correctamente."
        }
    }
}

export default UsersMemoryModel