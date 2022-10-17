export class RegistroUsuarioModel {

    constructor(codigoPostal, telefono, cuandoPresentasExamen, motivoCarnetConduccion, tipoPermiso, libreMatriculado, soyProfesional, contrasena, recibirActualizaciones) {
        this._codigoPostal = codigoPostal;
        this._telefono = telefono;
        this._cuandoPresentasExamen = cuandoPresentasExamen;
        this._motivoCarnetConduccion = motivoCarnetConduccion;
        this._tipoPermiso = tipoPermiso;
        this._libreMatriculado = libreMatriculado;
        this._soyProfesional = soyProfesional;
        this._contrasena = contrasena;
        this._recibirActualizaciones = recibirActualizaciones;
    }

    get codigoPostal() {
        return this._codigoPostal;
    }
    set codigoPostal(value) {
        this._codigoPostal = value;
    }

    get telefono() {
        return this._telefono;
    }
    set telefono(value) {
        this._telefono = value;
    }

    get cuandoPresentasExamen() {
        return this._cuandoPresentasExamen;
    }
    set cuandoPresentasExamen(value) {
        this._cuandoPresentasExamen = value;
    }

    get motivoCarnetConduccion() {
        return this._motivoCarnetConduccion;
    }
    set motivoCarnetConduccion(value) {
        this._motivoCarnetConduccion = value;
    }

    get tipoPermiso() {
        return this._tipoPermiso;
    }
    set tipoPermiso(value) {
        this._tipoPermiso = value;
    }

    get libreMatriculado() {
        return this._libreMatriculado;
    }
    set libreMatriculado(value) {
        this._libreMatriculado = value;
    }

    get soyProfesional() {
        return this._soyProfesional;
    }
    set soyProfesional(value) {
        this._soyProfesional = value;
    }

    get contrasena() {
        return this._contrasena;
    }
    set contrasena(value) {
        this._contrasena = value;
    }

    get recibirActualizaciones() {
        return this._recibirActualizaciones;
    }
    set recibirActualizaciones(value) {
        this._recibirActualizaciones = value;
    }
}