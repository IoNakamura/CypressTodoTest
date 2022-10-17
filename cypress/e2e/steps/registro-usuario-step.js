import { registroUsuario } from "../pages/registro-page";
import { cuentaActivadaPage } from "../pages/cuenta-activada-page";
import { LogicaUtils } from "../utils/logica-utils";

export function completarRegistroStep(registroUsuarioModel) {
    registroUsuario.inputEmail().type(LogicaUtils.correoAleatorio());
    registroUsuario.inputCodigoPostal().type(registroUsuarioModel.codigoPostal);
    registroUsuario.inputTelefono().type(registroUsuarioModel.telefono);
    seleccionarTiempoExamen(registroUsuarioModel);
    motivoCarnetConduccion(registroUsuarioModel);
    seleccionarPermiso(registroUsuarioModel);
    registroUsuario.inputContrasena().type(registroUsuarioModel.contrasena);
    registroUsuario.inputConfirmarContrasena().type(registroUsuarioModel.contrasena);
    registroUsuario.chAceptarTerminosCondiciones().click();
    deseaRecibirNotificaciones(registroUsuarioModel);
    registroUsuario.btnConfirmarRegistro().click();
}

function seleccionarTiempoExamen(registroUsuarioModel) {
    if (registroUsuarioModel.cuandoPresentasExamen == "En mas de 3 meses") {
        registroUsuario.rbMasTresMeses().click();
    } else {
        registroUsuario.rbMenosTresMeses().click();
    }
}

function motivoCarnetConduccion(registroUsuarioModel) {
    switch (registroUsuarioModel.motivoCarnetConduccion) {
        case "Laborales":
            registroUsuario.rbDesplazamientoLaboral().click();
            break;
        case "Ocio":
            registroUsuario.rbDesplazamientoOsio().click();
            break;
        case "No Depender":
            registroUsuario.rbNoDependerTransporte().click();
            break;
        default:
            console.log("Solo se admite las opciones: Laborales, Ocio y No depender pero recibio: " + registroUsuarioModel.registroUsuarioModel);
    }
}

function deseaRecibirNotificaciones(registroUsuarioModel) {
    if (registroUsuarioModel.recibirActualizaciones == "Si") {
        registroUsuario.rbSiNotificaciones().click();
    } else {
        registroUsuario.rbNoNotificaciones().click();
    }
}

function seleccionarPermiso(registroUsuarioModel) {
    if (registroUsuarioModel.soyProfesional == "Si") {
        registroUsuario.rbSoyProfesional().click();
    } else {
        registroUsuario.selectPermiso().select(registroUsuarioModel.tipoPermiso);
        if (registroUsuarioModel.libreMatriculado == "Libre") {
            registroUsuario.rbVoyLibre().click();
        } else {
            registroUsuario.rbEstoyMatriculado().click();
        }
    }
}

export function verificarMensajeEsperado(mensajeActivacion) {
    console.log(mensajeActivacion);
    cuentaActivadaPage.lblActivarCuentaActivada().should("have.text",mensajeActivacion);
}