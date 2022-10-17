import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { ingresarRegistroStep } from '../steps/ingresar-registro-step';
import { completarRegistroStep, verificarMensajeEsperado } from '../steps/registro-usuario-step';
import { RegistroUsuarioModel } from '../models/registro-usuario-model';

let registroUsuarioModel;

When(/^entro a la opcion de Registro$/, function () {
  ingresarRegistroStep();
});

When(/^completo la informacion del registro$/, function (dataUsuario) {

  registroUsuarioModel = new RegistroUsuarioModel(
    dataUsuario.raw()[0][0],
    dataUsuario.raw()[0][1],
    dataUsuario.raw()[0][2],
    dataUsuario.raw()[0][3],
    dataUsuario.raw()[0][4],
    dataUsuario.raw()[0][5],
    dataUsuario.raw()[0][6],
    dataUsuario.raw()[0][7],
    dataUsuario.raw()[0][8],    
  );
  completarRegistroStep(registroUsuarioModel);
});

Then(/^se debe validar el mensaje: (.*)$/, function (mensajeActivacion) {
  verificarMensajeEsperado(mensajeActivacion)
});