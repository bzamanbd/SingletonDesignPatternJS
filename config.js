// const config = function () {
//   const props = {} 
//   return { 
//     get:key => props[key],
//     set:(key,value) => props[key] = value
//   }  
// }()


// export default config


///the new way///

class Configuration{ 
    constructor(){ 
        this.props = {}
    }

    set(key,value){ 
        this.props[key] = value
    }

    get(key){ 
        return this.props[key]
    }
}

const config = Object.freeze( new Configuration() )

export default config
