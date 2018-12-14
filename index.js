function VV(value, config, callback){
    return new VVV(value, config, callback)
}

function VVV(value, config, callback) {
    this.match = true
    this.value = value
    this.config = config || {}

    this.checkFormat()
}

VVV.prototype.checkFormat = function() {
    if  (this.config.format && this.config.format != 'string' && this.config.format != 'int' && this.config.format != 'float' && this.config.format != 'boolean') {
        this.errorhandle('The format is not correct')
    } else {
        switch (this.config.format) {
            case 'string' :           
                if(typeof this.value == 'string') {
                    this.match = true 
                } else {
                    this.match = false 
                    this.errorhandle('This is not string format')
                } 
                break
            case 'int' :
                if (Number(value) === value && value % 1 === 0 ) {
                    this.match = true
                } else {
                    this.match = false
                    this.errorhandle('This is not int format')
                }
                break
            case 'int' :
                if (Number(value) === value && value % 1 !== 0 ) {
                    this.match = true
                } else {
                    this.match = false
                    this.errorhandle('This is not float format')
                }
                break
            case 'boolean' :
                if (typeof this.value == 'boolean') {
                    this.match = true
                } else {
                    this.match = false
                    this.errorhandle('This is not boolean format')
                }
                break
            default :
                break
       }
    
    }
}

VVV.prototype.errorhandle = function(error){
    this.match = false
    console.error('Error : ' + error)
}
