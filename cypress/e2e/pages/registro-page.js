const registroUsuario = {
    inputEmail: () => cy.get('#email'),
    inputCodigoPostal: () => cy.get('fieldset.fset_cp > input'),
    inputTelefono: () => cy.get('#tel'),
    rbMenosTresMeses: () => cy.get('label.spr[for=tie_ex_a]'),
    rbMasTresMeses: () => cy.get('label.spr[for=tie_ex_b]'),
    rbDesplazamientoLaboral: () => cy.get('label.spr[for=mot_perm_a]'),
    rbDesplazamientoOsio: () => cy.get('label.spr[for=mot_perm_b]'),
    rbNoDependerTransporte: () => cy.get('label.spr[for=mot_perm_c]'),

    selectPermiso: () => cy.get('select#perm'),
    rbVoyLibre: () => cy.get('label.spr[for=lib_si]'),
    rbEstoyMatriculado: () => cy.get('label.spr[for=lib_no]'),
    rbSoyProfesional: () => cy.get('label.spr[for=soyprof]'),

    inputContrasena: () => cy.get('#contra'),
    inputConfirmarContrasena: () => cy.get('#contrarep'),
    chAceptarTerminosCondiciones: () => cy.get('label.spr[for=legon]'),

    rbSiNotificaciones: () => cy.get('label.spr[for=pubon_si]'),
    rbNoNotificaciones: () => cy.get('label.spr[for=pubon_no]'),

    btnConfirmarRegistro: () => cy.get('#bot_reg'),
};

export { registroUsuario }