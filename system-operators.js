exports.SystemOperatorOverRide = function () {

    var SystemOperators = ['nkobellic'];

    Users.User.prototype.hasSysopAccess = function () {
        if (SystemOperators.indexOf(this.userid) > -1 && this.authenticated) {
         return true;
        } else {
         return false;
        }
    };
    
};
